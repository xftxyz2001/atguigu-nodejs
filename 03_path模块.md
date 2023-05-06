# path模块
path 模块提供了 `操作路径` 的功能，我们将介绍如下几个较为常用的几个 API：
| API           | 说明                      |
| ------------- | ------------------------- |
| path.resolve  | 拼接规范的绝对路径 `常用` |
| path.sep      | 获取操作系统的路径分隔符  |
| path.parse    | 解析路径并返回对象        |
| path.basename | 获取路径的基础名称        |
| path.dirname  | 获取路径的目录名          |
| path.extname  | 获得路径的扩展名          |

[代码示例](代码/03_path模块/代码/path.js)：
```js
const path = require('path');
//获取路径分隔符
console.log(path.sep);
//拼接绝对路径
console.log(path.resolve(__dirname, 'test'));
//解析路径
let pathname = 'D:/program file/nodejs/node.exe';
console.log(path.parse(pathname));
//获取路径基础名称
console.log(path.basename(pathname))
//获取路径的目录名
console.log(path.dirname(pathname));
//获取路径的扩展名
console.log(path.extname(pathname));
```

- `__dirname`: 当前文件所在目录的绝对路径
- `__filename`: 当前文件的绝对路径

