//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.get('/response', (req, res) => {
  //原生响应
  // res.statusCode = 404;
  // res.statusMessage = 'love';
  // res.setHeader('xxx', 'yyy');
  // res.write('hello express ')
  // res.end('response');

  //express 响应
  // res.status(500);
  // res.set('aaa','bbb');
  // res.send('你好 Express');
  res.status(500).set('abc', 'def').send('这都是 OK 的');

});

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})