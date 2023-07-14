'use strict';

import { Service } from 'egg';
import Password from 'node-php-password';
// import assert from 'assert';

class ManagerService extends Service {
  root: string;
  constructor(ctx) {
    super(ctx);
    this.root = 'https://cnodejs.org/api/v1';
  }

  /**
 * 获取所有管理员
 * @param  {[type]}   conditions 查询条件
 * 查询条件统一规范
 * conditions
	{
		"query" : 关键词查询,
		"current" : 页数,
		"pageSize" : 每页长度
	}
 * @param  {Function} cb         回调函数
 */
  async getAllManagers(conditions, cb) {
    const ctx = this.ctx;
    if (!conditions.current) return cb('current 参数不合法');
    if (!conditions.pageSize) return cb('pageSize 参数不合法');

    // 通过关键词获取管理员数量
    const count = await ctx.service.dao.managerDAO.countByKey(conditions.query);
    const key = conditions.query;
    const current = parseInt(conditions.current);
    const pageSize = parseInt(conditions.pageSize);

    // const pageCount = Math.ceil(count / pageSize);
    let offset = (current - 1) * pageSize; // 当前页
    if (offset >= count) {
      offset = count;
    }
    const limit = pageSize; // 当前页数量
    const managers = await ctx.service.dao.managerDAO.findByKey(key, offset, limit);
    console.log(333333, managers);

    const retManagers: any[] = [];
    for (const idx in managers) {
      const manager = managers[idx];
      let role_name = manager.role_name;
      if (!manager.role_id) {
        role_name = '超级管理员';
      }
      const data = {
        id: manager.mg_id,
        role_name,
        username: manager.mg_name,
        create_time: manager.mg_time,
        mobile: manager.mg_mobile,
        email: manager.mg_email,
        mg_state: manager.mg_state === 1,
      };
      retManagers.push(data);
    }
    const resultDta = {
      total: count,
      current,
      data: retManagers,
    };
    return resultDta;

  }

  /**
   * 管理员登录
   * @param  {[type]}   username 用户名
   * @param  {[type]}   password 密码
   * @param  {Function} cb       回调
   */
  async login(username, password) {
    const app_: any = this.app;
    this.app.logger.debug('login => username:%s,password:%s', username, password);

    try {
      const manager = await app_.model.ManagerModel.findOne({
        where: {
          mg_name: username,
        },
      });
      if (!manager) {
        return '用户名不存在';
      }

      if (manager.role_id < 0) {
        return '该用户没有权限登录';
      }

      if (manager.role_id !== 0 && manager.mg_state !== 1) {
        return '该用户已经被禁用';
      }
      if (Password.verify(password, manager.mg_pwd)) {
        return {
          id: manager.mg_id,
          rid: manager.role_id,
          username: manager.mg_name,
          mobile: manager.mg_mobile,
          email: manager.mg_email,
        };
      }
      return '密码错误';
    } catch (error) {
      this.app.logger.debug(error);
    }
  }
}

module.exports = ManagerService;
