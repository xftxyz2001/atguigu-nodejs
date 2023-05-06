//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', () => {
  //5. 创建文档的结构对象
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    is_hot: Boolean
  });

  //6. 创建模型对象  对文档操作的封装对象    mongoose 会使用集合名称的复数, 创建集合
  let BookModel = mongoose.model('novel', BookSchema);

  //价格小于 20 的图书
  // BookModel.find({price: {$lt: 20}}, (err, data) => {
  //   if(err) {
  //     console.log('读取失败~~');
  //     return;
  //   }
  //   console.log(data);
  // })

  //曹雪芹 或者 余华的书
  // BookModel.find({$or: [{author: '曹雪芹'}, {author: '余华'}]}, (err, data) => {
  //   if (err) {
  //     console.log('读取失败~~');
  //     return;
  //   }
  //   console.log(data);
  // })

  //价格大于 30 且小于 70
  // BookModel.find({$and: [{price: {$gt: 30}}, {price: {$lt: 70}}]}, (err, data) => {
  //   if (err) {
  //     console.log('读取失败~~');
  //     return;
  //   }
  //   console.log(data);
  // })

  //正则表达式, 搜索书籍名称中带有 `三` 的图书
  // BookModel.find({name: /三/}, (err, data) => {
  //   if (err) {
  //     console.log('读取失败~~');
  //     return;
  //   }
  //   console.log(data);
  // })

  BookModel.find({name: new RegExp('三')}, (err, data) => {
    if (err) {
      console.log('读取失败~~');
      return;
    }
    console.log(data);
  })

});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
});

