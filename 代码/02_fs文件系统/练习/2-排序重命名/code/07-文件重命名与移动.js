//1. 导入 fs 模块
const fs = require('fs');

//2. 调用 rename 方法
// fs.rename('./座右铭.txt', './论语.txt', err => {
//   if(err) {
//     console.log('操作失败~');
//     return;
//   }
//   console.log('操作成功');
// });

//文件的移动
fs.rename('./data.txt', '../资料/data.txt', err => {
  if(err) {
    console.log('操作失败~');
    return;
  }
  console.log('操作成功');
})