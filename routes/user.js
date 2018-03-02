const Router = require('koa-router');
var router = new Router({
  //路由前缀
	prefix: '/user'
});

const user = require('../controllers/user');

//不管什么类型（get,post,put,del等等）的请求，都会经过这个中间件
// router.all('/*', async function(ctx, next){
// 	console.log('enter user');
// 	await next();
// });

router.post('/login',user.login);
router.post('/change_password',user.changePassword);

module.exports = router;
