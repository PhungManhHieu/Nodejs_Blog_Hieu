const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine; // khai báo làm theo doc phải thêm .engine ở cuối

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

// Http logger
app.use(morgan('combined'));

// Cấu hình template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Đường dẫn cho trang chủ
app.get('/', (req, res) => {
  res.render('home');  
});

//Đường dẫn đến trang tin tức
app.get('/tintuc', (req, res) => {
  res.render('news');  
});

// Khởi động ứng dụng
app.listen(port, () => console.log(`Trang của bạn chạy theo địa chỉ này http://localhost:${port}`));