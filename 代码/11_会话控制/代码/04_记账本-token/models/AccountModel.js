//导入 mongoose
const mongoose = require('mongoose');
//创建文档的结构对象
//设置集合中文档的属性以及属性值的类型
let AccountSchema = new mongoose.Schema({
  //标题
  title: {
    type: String,
    required: true
  },
  //时间
  time: Date,
  //类型
  type: {
    type: Number,
    default: -1
  },
  //金额
  account: {
    type: Number,
    required: true
  },
  //备注
  remarks: {
    type: String 
  }
});

//创建模型对象  对文档操作的封装对象
let AccountModel = mongoose.model('accounts', AccountSchema);

//暴露模型对象
module.exports = AccountModel;
