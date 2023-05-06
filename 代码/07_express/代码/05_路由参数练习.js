//导入 express
const express = require('express');
//导入 json 文件
const { singers } = require('./singers.json');
//创建应用对象
const app = express();

//创建路由
app.get('/singer/:id.html', (req, res) => {
  //获取路由参数
  let { id } = req.params;
  //在数组中寻找对应 id 的数据
  let result = singers.find(item => {
    if (item.id === Number(id)) {
      return true;
    }
  });

  //判断
  if (!result) {
    res.statusCode = 404;
    res.end(`<h1>404 Not Found</h1>`)
    return;
  }

  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h2>${result.singer_name}</h2>
    <img src='${result.singer_pic}' />
  </body>
  </html>`);
});

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})