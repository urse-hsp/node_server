const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Strategy = require('passport-http-bearer').Strategy

const config = require('../config/default.json')
const jwt = require('jsonwebtoken')
const jwt_config = config.jwt

// 通过登录函数初始化
/**
 * 初始化 passport 框架
 *
 * @param  {[type]}   app       全局应用程序
 * @param  {[type]}   loginFunc 登录函数
 * @param  {Function} callback  回调函数
 */
module.exports.setup = function (app, loginFunc, callback) {
  // 用户名密码 登录策略
  passport.use(
    new LocalStrategy(function (username, password, done) {
      if (!loginFunc) return done('登录验证函数未设置')

      loginFunc(username, password, function (err, user) {
        if (err) return done(err)
        return done(null, user)
      })
    })
  )

  // token 验证策略 校验token
  passport.use(
    new Strategy(function (token, done) {
      jwt.verify(token, jwt_config.secretKey, function (err, decode) {
        if (err) {
          return done('验证错误')
        }
        console.log('通过')
        return done(null, decode)
      })
    })
  )

  // 初始化passport模块
  app.use(passport.initialize())
  if (callback) callback()
}

/**
 * 登录验证逻辑 登录接口
 *
 * @param  {[type]}   req  请求
 * @param  {[type]}   res  响应
 * @param  {Function} next [description]
 */
module.exports.login = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) return res.sendResult(null, 401, err)
    if (!user) return res.sendResult(null, 401, '参数错误')
    // 获取角色信息
    // 生成token
    var token = jwt.sign({ uid: user.id, rid: user.rid }, jwt_config.secretKey, { expiresIn: jwt_config.expiresIn })
    user.token = 'Bearer ' + token
    return res.sendResult(user, 200, '登录成功')
  })(req, res, next)
}

/**
 * token验证函数 权限
 *
 * @param  {[type]}   req  请求对象
 * @param  {[type]}   res  响应对象
 * @param  {Function} next 传递事件函数
 */
module.exports.tokenAuth = function (req, res, next) {
  // 这里通过初始化的 Strategy 解析校验后 进行回调处理
  passport.authenticate('bearer', { session: false }, function (err, tokenData) {
    if (err) return res.sendResult(null, 400, '无效token')
    if (!tokenData) return res.sendResult(null, 400, '无效token')
    req.userInfo = {}
    req.userInfo.uid = tokenData['uid']
    req.userInfo.rid = tokenData['rid']
    next()
  })(req, res, next)
}
