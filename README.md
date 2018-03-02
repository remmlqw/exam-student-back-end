# 在线考试系统（学生端）

**项目采用 Node + Koa2 + Mysql**

前言
> 这个是本系统的学生端的后台代码
  前端代码点击：
  [教务管理+在线考试系统（教师端）](https://github.com/remmlqw/exam-teacher)
  [在线考试系统（学生端）](https://github.com/remmlqw/exam-student)

### 功能模块
- 用户
    - 登录
    - 修改密码

- 考试
    - 查询当前学生是否有将要进行的考试
    - 得到试卷的所有题目
    - 交卷

### 代码目录
```js
+-- controllers/                            ---控制器，对请求的操作(相当于MVC中的C)
|    --- exam.js                            ---考试模块
|    --- user.js                            ---用户模块
+-- models/                                 ---数据模型(相当于MVC中的M)
|    --- connection.js                      ---数据库连接  
+-- node_modules/                           ---项目依赖的模块
|    --- ...
+-- routes/                                 ---路由控制器
|    --- exam.js                            ---考试相关路由
|    --- user.js                            ---登录相关路由
+-- static/                                 ---静态资源托管目录
|    --- ...
--- app.js                                  ---项目入口及程序启动文件
--- package.json                            ---包描述文件及开发者信息
--- README.md                               ---项目说明                              
```

### 启动项目

``` js
node app.js
```

### 项目演示

在浏览器地址栏输入
``` js
http://127.0.0.1:3000/#/login
```
