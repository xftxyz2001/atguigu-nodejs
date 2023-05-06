//检测登录的中间件
module.exports = (req, res, next) => {
  //判断
  if(!req.session.username){
    return res.redirect('/login');
  }
  next();
}