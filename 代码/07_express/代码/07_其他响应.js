//导入 express
const express = require('express');

//创建应用对象
const app = express();

//创建路由
app.get('/other', (req, res) => {
  //跳转响应
  // res.redirect('http://atguigu.com');
  //下载响应
  // res.download(__dirname + '/package.json');
  // JSON 响应
  // res.json({
  //   name: '尚硅谷',
  //   slogon: '让天下没有难学的技术'
  // })
  //响应文件内容
  res.sendFile(__dirname + '/test.html');// path.resolve()
});

//监听端口, 启动服务
app.listen(3000, () => {
  console.log('服务已经启动, 端口 3000 正在监听中....')
})