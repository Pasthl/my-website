const express = require('express');
const router = express.Router();

// Middleware to handle language preference
router.use((req, res, next) => {
  // Default language is Chinese, but can be set to English via query parameter
  res.locals.lang = req.query.lang === 'en' ? 'en' : 'zh';
  
  // Store current path for language toggle links
  res.locals.currentPath = req.path;
  
  next();
});

// Home/About page route
router.get('/', (req, res) => {
  res.render('pages/index', { 
    title: res.locals.lang === 'en' ? 'About Me' : '关于我',
    lang: res.locals.lang,
    currentPath: res.locals.currentPath
  });
});

// Projects page route
router.get('/projects', (req, res) => {
  res.render('pages/projects', { 
    title: res.locals.lang === 'en' ? 'My Projects' : '我的项目',
    lang: res.locals.lang,
    currentPath: res.locals.currentPath
  });
});

// Smart World Clock project detail page route
router.get('/projects/smart-clock', (req, res) => {
  res.render('pages/smart-clock', { 
    title: res.locals.lang === 'en' ? 'Smart World Clock - Project Details' : '智能世界时钟 - 项目详情',
    lang: res.locals.lang,
    currentPath: res.locals.currentPath
  });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('pages/contact', { 
    title: res.locals.lang === 'en' ? 'Contact Me' : '联系我',
    lang: res.locals.lang,
    currentPath: res.locals.currentPath
  });
});

// API route example
router.get('/api/hello', (req, res) => {
  const response = {
    message: res.locals.lang === 'en' ? 'Hello, World!' : '你好，世界！'
  };
  res.json(response);
});

module.exports = router;