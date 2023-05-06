//1. 导入 http 模块
const http = require('http');

//2. 创建服务对象
const server = http.createServer((request, response) => {
  //获取请求的方法
  let { method } = request;
  //获取请求的 url 路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1');
  response.setHeader('content-type', 'text/html;charset=utf-8');
  //判断
  if (method === 'GET' && pathname === '/login') {
    //登录的情形
    response.end('登录页面');
  } else if (method === 'GET' && pathname === '/reg') { // register 注册
    response.end('注册页面');
  } else {
    response.end('Not Found');
  }
});

//3. 监听端口 启动服务
server.listen(9000, () => {
  console.log('服务已经启动.. 端口 9000 监听中....');
});