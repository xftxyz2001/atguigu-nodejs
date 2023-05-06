//导入 fs 模块
const fs = require('fs');

//读取 code 文件夹
const files = fs.readdirSync('./code');

//遍历数组
files.forEach(item => {
  //拆分文件名
  let data = item.split('-');
  let [num, name] = data; //解构赋值
  //判断
  if (Number(num) < 10) {
    num = '0' + num;
  }
  //创建新的文件名
  let newName = num + '-' + name;
  //重命名
  fs.renameSync(`./code/${item}`, `./code/${newName}`);
});