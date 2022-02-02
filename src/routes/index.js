const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // app.post('/search', function (req, res) {
    //  console.log(req.body)//form data
    //   res.send('oke')
    // });
}

module.exports = route;
