const express = require('express');
const router = express.Router();

// 首页路由
router.get('/', (req, res) => {
  res.render('pages/index', { 
    title: '首页',
    message: '欢迎来到我的网站！' 
  });
});

// 关于页面路由
router.get('/about', (req, res) => {
  res.render('pages/about', { 
    title: '关于我们',
    content: '这是一个使用Express和EJS构建的简单网站。' 
  });
});

// 测试API路由
router.get('/api/hello', (req, res) => {
  res.json({ message: '你好，世界！' });
});

module.exports = router;