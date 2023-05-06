const ejs = require('ejs');
//西游记
const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];

//原生 JS
// let str = '<ul>';

// xiyou.forEach(item => {
//   str += `<li>${item}</li>`;
// })

// //闭合 ul
// str += '</ul>';

// console.log(str);

// EJS 实现
const fs = require('fs');
let html = fs.readFileSync('./02_西游.html').toString();
let result = ejs.render(html, {xiyou:xiyou});

console.log(result);