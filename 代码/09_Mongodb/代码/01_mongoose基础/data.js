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

  //7. 新增
  BookModel.insertMany([{
    name: '西游记',
    author: '吴承恩',
    price: 19.9,
    is_hot: true
  }, {
    name: '红楼梦',
    author: '曹雪芹',
    price: 29.9,
    is_hot: true
  }, {
    name: '三国演义',
    author: '罗贯中',
    price: 25.9,
    is_hot: true
  }, {
    name: '水浒传',
    author: '施耐庵',
    price: 20.9,
    is_hot: true
  }, {
    name: '活着',
    author: '余华',
    price: 19.9,
    is_hot: true
  }, {
    name: '狂飙',
    author: '徐纪周',
    price: 68,
    is_hot: true
  }, {
    name: '大魏能臣',
    author: '黑男爵',
    price: 9.9,
    is_hot: false
  },
  {
    name: '知北游',
    author: '洛水',
    price: 59,
    is_hot: false
  },{
    name: '道君',
    author: '跃千愁',
    price: 59,
    is_hot: false
  },{
    name: '七煞碑',
    author: '游泳的猫',
    price: 29,
    is_hot: false
  },{
    name: '独游',
    author: '酒精过敏',
    price: 15,
    is_hot: false
  },{
    name: '大泼猴',
    author: '甲鱼不是龟',
    price: 26,
    is_hot: false
  },
  {
    name: '黑暗王者',
    author: '古羲',
    price: 39,
    is_hot: false
  },
  {
    name: '不二大道',
    author: '文刀手予',
    price: 89,
    is_hot: false
  },
  {
    name: '大泼猴',
    author: '甲鱼不是龟',
    price: 59,
    is_hot: false
  },
  {
    name: '长安的荔枝',
    author: '马伯庸',
    price: 45,
    is_hot: true
  },
  {
    name: '命运',
    author: '蔡崇达',
    price: 59.8,
    is_hot: true
  },
  {
    name: '如雪如山',
    author: '张天翼',
    price: 58,
    is_hot: true
  },
  {
    name: '三体',
    author: '刘慈欣',
    price: 23,
    is_hot: true
  },
  {
    name: '秋园',
    author: '杨本芬',
    price: 38,
    is_hot: true
  },
  {
    name: '百年孤独',
    author: '范晔',
    price: 39.5,
    is_hot: true
  },
  {
    name: '在细雨中呼喊',
    author: '余华',
    price: 25,
    is_hot: true
  },], (err, data) => {
    //判断是否有错误
    if (err) {
      console.log(err);
      return;
    }
    //如果没有出错, 则输出插入后的文档对象
    console.log(data);
    //8. 关闭数据库连接 (项目运行过程中, 不会添加该代码)
    mongoose.disconnect();
  });

});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
  console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
  console.log('连接关闭');
});

