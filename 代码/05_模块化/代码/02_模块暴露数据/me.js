//声明一个函数
function tiemo(){
  console.log('贴膜...');
}

//捏脚
function niejiao(){
  console.log('捏脚....');
}

//暴露数据
// module.exports = {
//   tiemo,
//   niejiao
// }

// exports 暴露数据
// exports.niejiao = niejiao;
// exports.tiemo = tiemo;

//1. module.exports 可以暴露`任意`数据
// module.exports = 'iloveyou';
// module.exports = 521;

//2. 不能使用 `exports = value`的形式暴露数据
// exports = 'iloveyou' // X

// exports = module.exports = {}
// console.log(module.exports);
// console.log(module.exports === exports);

exports = module.exports = {tiemo:tiemo}
exports.tiemo = tiemo;
// exports = 'iloveyou' // X
