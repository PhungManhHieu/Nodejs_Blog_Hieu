const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine; // khai báo làm theo doc phải thêm .engine ở cuối
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')))

// Http logger
app.use(morgan('combined'));

// Cấu hình template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Khởi tạo tuyến đường
route(app);

// Khởi động ứng dụng
app.listen(port, () => console.log(`Trang của bạn chạy theo địa chỉ này http://localhost:${port}`));