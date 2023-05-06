//1. 导入 http 模块
const http = require('http');

//2. 创建服务对象
const server = http.createServer((request, response) => {
  //1. 声明一个变量
  let body = '';
  //2. 绑定 data 事件
  request.on('data', chunk => {
    // 了解即可，后面会有更好的方法
    body += chunk; // 在对buffer进行加法运算时, 会自动调用 toString 方法
  })
  //3. 绑定 end 事件
  request.on('end', () => {
    console.log(body);
    //响应
    response.end('Hello HTTP');
  });
});

//3. 监听端口, 启动服务
server.listen(9000, () => {
  console.log('服务已经启动....')
});
