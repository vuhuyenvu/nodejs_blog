const newsRouter = require('./news');
const siteRouter = require('./site');
const employeeRouter = require('./employee.routes');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/employee', employeeRouter);
    app.use('/', siteRouter);

    // app.post('/search', function (req, res) {
    //  console.log(req.body)//form data
    //   res.send('oke')
    // });
}

module.exports = route;
