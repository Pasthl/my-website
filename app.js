const express = require('express');
const path = require('path');
const routes = require('./routes/index');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Parse request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Set default language middleware
app.use((req, res, next) => {
  // If no language is specified, default to Chinese
  if (!req.query.lang) {
    res.locals.lang = 'zh';
  }
  next();
});

// Routes
app.use('/', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('pages/404', { 
    title: res.locals.lang === 'en' ? 'Page Not Found' : '页面未找到',
    lang: res.locals.lang || 'zh'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/error', {
    title: res.locals.lang === 'en' ? 'Server Error' : '服务器错误',
    lang: res.locals.lang || 'zh',
    error: err
  });
});

// Start server
app.listen(3000, '127.0.0.1', () => {
  console.log('Server running on http://127.0.0.1:3000');
});
