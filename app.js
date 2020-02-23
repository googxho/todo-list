// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 导入mongoose模块
const mongoose = require('mongoose');
// 导入bodyParser模块
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 处理post请求参数
app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: false}));

// 数据库连接
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true })
 

// 导入todo路由案例
const todoRouter = require('./route/todo')
// 当客户端的请求路径以/todo开头时
app.use('/todo', todoRouter);

 
// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');