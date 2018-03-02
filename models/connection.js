const mysql = require('mysql');
exports.getConnection = function(){
	let connection = mysql.createConnection({
		host: '119.29.111.28',
		database: 'exam_student',
		user: 'root',
		password: '123456'
	});
	connection.connect();
	return connection;
};
