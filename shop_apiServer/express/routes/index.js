var express = require('express')
var router = express.Router()
// const User = require('../models/user')
const { sequelize } = require('../modules/database')
var _ = require('lodash')
var path = require('path')
var dao = require(path.join(process.cwd(), 'dao/DAO'))
const User = require('../services/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render用来渲染模板文件
  // res.render('index', { title: 'Express' });

  // res.send()和res.end(原生)用法基本一致,不过省去了请求头的字符集已经状态码等问题
  // console.log(res)
  res.sendResult('respond with a resource')
  // res.sendResult('respond with a resource')

  // 返回json格式
  // res.json('respond with a resource2')
})

// 测试
router.post('test/:data', (req, res) => {
  // 后面的表单参数会放到req.query、 路径上的参数会放到req.params里、 json参数会放到req.body里，
  // http://localhost:8888/test/123?a=b    /text是params
  return res.json({ query: req.query, data: req.params, json: req.body })
})

router.get('getlist2', async (req, res, next) => {
  // const data = await User.findAll({
  //   where: {
  //     user_id: 1
  //   }
  // })
  // // const [results, metadata] = await sequelize.query('SELECT * FROM sp_user')
  // const sqlStr1 = `INSERT into sp_user (username,create_time,update_time) values('${123}','23','23')`
  // const [results, metadata] = await sequelize.query(sqlStr1)
  // const info = { username: 'Jane', user_id: 3, update_time: '23', create_time: '23' }
  // const data = await User.create(info)
  // return res.sendResult(data)

  dao.list('ManagerModel', {}, function (err, newGood) {
    if (err) return res.sendResult(null, 400, err)
    res.sendResult(newGood, 201, '创建成功')
  })

  // dao.create(
  //   'User',
  //   info,
  //   function (err, newGood) {
  //     if (err) return res.sendResult(null, 400, err)
  //     res.sendResult(newGood, 201, '创建成功')
  //   },
  //   'user_id'
  // )
})

// router.get('/login', async (req, res, next) => {
//   const data = await User.findAll()
//   // const [results, metadata] = await sequelize.query('SELECT * FROM user')
//   console.log(6);
//   return res.sendResult(data)
// })

module.exports = router
