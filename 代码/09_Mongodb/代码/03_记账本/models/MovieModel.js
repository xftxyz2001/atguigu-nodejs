//导入 mongoose
const mongoose = require('mongoose');

// 创建文档结构
const MovieSchema = new mongoose.Schema({
  title: String,
  director: String
});

//创建模型对象
const MovieModel = mongoose.model('movie', MovieSchema);

//暴露
module.exports = MovieModel;