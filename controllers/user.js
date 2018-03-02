const bluebird = require('bluebird');//promise化
const connectionModel = require('../models/connection');

exports.login = async function(ctx, next){
	try {
    const data = ctx.request.body;

		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		const results = await query(
			`select * from user where
			username = '${data.username}'
			and password = '${data.password}'`
		);
		if(results.length){
			let user = results[0];
			ctx.body = {
				respCode: 1,
        studentInfo: [{
          "classId": user.classId,
          "name": user.username,
          "password": user.password,
          "stuId": user.stuId
        }]
			};
		}else {
      ctx.body = {
				respCode: -1,
				respMsg : '学号或密码错误'
			};
    }
		connection.end();
  }catch(e){
    console.log('[/user/login] error:', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};

exports.changePassword = async function(ctx, next){
	try {
    const data = ctx.request.body;

		const connection = connectionModel.getConnection();
		const query = bluebird.promisify(connection.query.bind(connection));
		//验证原密码
		const results = await query(
			`select * from user where
			instId = '1'
			and password = '${data.oldPassword}'`
		);
		if(results.length > 0) {
			//修改密码
			const results = await query(
				`update user set password='${data.password}'
				where instId = '1'`
			);
			if(results.changedRows > 0) {
				console.log("这个学生要修改密码，旧密码："+data.oldPassword+",新密码"+data.password);
				ctx.body = {
					respCode: 1,
					respMsg: "密码修改成功！"
				};
			}

		}
		else {
			ctx.body = {
				respCode: -1,
				respMsg: "原密码错误！"
			};
		}


  }catch(e){
    console.log('[/user/change_password] error:', e.message, e.stack);
    ctx.body = {
			respCode: e.code || -1,
			respMsg: e.message
		};
  }
};
