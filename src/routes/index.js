const newsRouter = require("./news");
const siteRouter = require("./site");
const meRouter = require("./me");
const coursesRouter = require("./courses");

function route(app) {
  //Đường dẫn đến trang tin tức
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);

  // Đường dẫn cho trang chủ
  app.use("/", siteRouter);
}

module.exports = route;
