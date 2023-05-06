//导入 express
const express = require('express');

//创建应用对象
const app = express();

//设置静态资源中间件
app.use(express.static(__dirname + '/尚品汇'));

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})