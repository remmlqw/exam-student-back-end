const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require("koa-static");

//静态资源托管
app.use(serve(path.join(__dirname+"/static")));

//用来解析body的中间件，比方说你通过post来传递表单，json数据，或者上传文件，
//在koa中是不容易获取的，通过koa-bodyparser解析之后，在koa中this.body就能直接获取到数据。
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//路由配置
const routes = ['user','exam'];
routes.forEach((route) => {
	app.use(require(`./routes/${route}`).routes());
});

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.listen(3000,function(){
	console.log('listening on port 3000');
});
