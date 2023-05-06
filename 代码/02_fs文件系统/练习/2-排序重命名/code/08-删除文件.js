//1. 导入 fs 模块
const fs = require('fs');

//2. 调用 unlink 方法    unlinkSync
// fs.unlink('./观书有感.txt', err => {
//   if(err) {
//     console.log('删除失败~');
//     return;
//   }
//   console.log('删除成功');
// });

// 调用 rm 方法  14.4   rmSync
// fs.rm('./论语.txt', err => {
//   if (err) {
//     console.log('删除失败~');
//     return;
//   }
//   console.log('删除成功');
// })

