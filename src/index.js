const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const { extname } = require('path')
const app = express()
const port = 3000

app.use(morgan('combined')) 
//viet tat .hbs cho handlebars
app.engine('.hbs', engine({
  extname: '.hbs'
}
   
));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH' , path.join(__dirname, 'resources/views') )

app.get('/news', function (req, res) {
    res.render('news')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})