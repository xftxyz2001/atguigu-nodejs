//1. 导入 http 模块
const http = require('http');

//2. 创建服务对象
const server = http.createServer((request, response) => {
  // response.end('Hello HTTP'); //设置响应体
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.end('你好 Nodemon Hello Http'); //设置响应体
});

//3. 监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
