//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.get('/request', (req, res) => {
  //原生操作
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);

  // //express 操作
  // console.log(req.path);
  // console.log(req.query);
  // //获取 ip 
  // console.log(req.ip);
  //获取请求头
  console.log(req.get('host'));

  res.end('hello express');
});

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})