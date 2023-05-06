//1. 导入 express
const express = require('express');

//2. 创建路由对象
const router = express.Router();

// router.use()

//后台
router.get('/admin', (req, res) => {
  res.send('后台首页');
});

//后台设置
router.get('/setting', (req, res) => {
  res.send('设置页面');
});

module.exports = router;