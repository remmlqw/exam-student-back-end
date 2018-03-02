const Router = require('koa-router');
var router = new Router({
  //路由前缀
	prefix: '/exam'
});

const exam = require('../controllers/exam');

//不管什么类型（get,post,put,del等等）的请求，都会经过这个中间件
// router.all('/*', async function(ctx, next){
// 	console.log('enter exam');
// 	await next();
// });

router.post('/query',exam.query);
router.post('/get_question',exam.getQuestion);
router.post('/submit_paper',exam.submit_paper);
module.exports = router;
