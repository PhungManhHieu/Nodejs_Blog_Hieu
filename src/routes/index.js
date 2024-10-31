
const newsRouter = require('./news');  
const siteRouter = require('./site');  

function route(app){
    
    //Đường dẫn đến trang tin tức
    app.use('/news', newsRouter);

    // Đường dẫn cho trang chủ
    app.use('/', siteRouter);
};

module.exports = route;