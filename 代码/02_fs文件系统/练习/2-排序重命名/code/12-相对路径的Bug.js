// 
const fs = require('fs');

// 相对路径参照物: 命令行的工作目录
// fs.writeFileSync('./index.html', 'love');

//绝对路径 '全局变量' 保存的是: 所在文件的所在目录的绝对路径
// console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'love');
