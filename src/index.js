const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars").engine; // khai báo làm theo doc phải thêm .engine ở cuối
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const route = require("./routes");
const bodyParser = require("body-parser"); // Nhập body-parser

const db = require("./config/db/index");

//connect db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Http logger
app.use(morgan("combined"));

app.use(methodOverride("_method"));

app.use(bodyParser.json()); // Để xử lý dữ liệu JSON
app.use(bodyParser.urlencoded({ extended: true })); // Để xử lý dữ liệu từ form

// Cấu hình template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Khởi tạo tuyến đường
route(app);

// Khởi động ứng dụng
app.listen(port, () =>
  console.log(`Trang của bạn chạy theo địa chỉ này http://localhost:${port}`)
);
