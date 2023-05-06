//导入 express
const express = require('express');
const cookieParser = require('cookie-parser')

//创建应用对象
const app = express();
app.use(cookieParser());

//创建路由规则
app.get('/set-cookie', (req, res) => {
  // res.cookie('name', 'zhangsan'); // 会在浏览器关闭的时候, 销毁
  res.cookie('name', 'lisi', { maxAge: 60 * 1000 }) // max 最大  age 年龄
  res.cookie('theme', 'blue');
  res.send('home');
});

//删除 cookie
app.get('/remove-cookie', (req, res) => {
  //调用方法
  res.clearCookie('name');
  res.send('删除成功~~');
});

//获取 cookie
app.get('/get-cookie', (req, res) => {
  //获取 cookie
  console.log(req.cookies);
  res.send(`欢迎您 ${req.cookies.name}`);
})

//启动服务
app.listen(3000);