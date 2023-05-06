//导入 http 模块
const http = require('http');
const fs = require('fs');

//创建服务对象
const server = http.createServer((request, response) => {
  //获取请求url的路径
  let { pathname } = new URL(request.url, 'http://127.0.0.1');
  if (pathname === '/') {
    //读取文件内容
    let html = fs.readFileSync(__dirname + '/10_table.html');
    response.end(html); //设置响应体
  } else if (pathname === '/index.css') {
    //读取文件内容
    let css = fs.readFileSync(__dirname + '/index.css');
    response.end(css); //设置响应体
  } else if (pathname === '/index.js') {
    //读取文件内容
    let js = fs.readFileSync(__dirname + '/index.js');
    response.end(js); //设置响应体
  } else {
    response.statusCode = 404;
    response.end('<h1>404 Not Found</h1>');
  }

});

//监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
