const express = require('express');
const path = require('path');
const routes = require('./routes/index');

// 初始化Express应用
const app = express();
const port = process.env.PORT || 3000;

// 设置EJS为视图引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 解析请求体
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 静态文件中间件
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.use('/', routes);

// 404处理
app.use((req, res) => {
  res.status(404).render('pages/404', { title: '页面未找到' });
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});