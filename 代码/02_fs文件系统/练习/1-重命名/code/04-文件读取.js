//1. 引入 fs 模块
const fs = require('fs');

//2. 异步读取
// fs.readFile('./观书有感.txt', (err, data) => {
//   if(err) {
//     console.log('读取失败~~');
//     return;
//   }
//   console.log(data.toString());
// });

//3. 同步读取
let data = fs.readFileSync('./观书有感.txt');

console.log(data.toString());