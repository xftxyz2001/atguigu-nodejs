//1. 引入 fs 模块
const fs = require('fs');

//2. 调用 appendFile
fs.appendFile('./座右铭.txt', ', 择其善者而从之, 择期不善者而改之', err => {
  //判断
  if (err) {
    console.log('写入失败~~');
    return;
  }
  console.log('追加写入成功');
});

fs.appendFileSync('./座右铭.txt', '\r\n温故而知新, 可以为师矣')

//writeFile 实现追加写入
fs.writeFile('./座右铭.txt', 'love love love', { flag: 'a' }, err => {
  if (err) {
    console.log('写入失败~');
    return;
  }
  console.log('写入成功');
});