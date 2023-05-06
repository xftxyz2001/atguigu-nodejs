//导入 fs 模块
const fs = require('fs');

//读取 code 文件夹
const files = fs.readdirSync('./code');

//遍历数组
files.forEach((item, index) => {
  //拆分
  let [num, name] = item.split('-');
  //index 自增
  index++;
  //判断
  index = index < 10 ? '0' + index : index;
  //拼接新的名字
  let newName = index + '-' + name;
  //移动文件
  fs.renameSync(`./code/${item}`, `./code/${newName}`);
});
