const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const { extname } = require('path')// dat lai ten
const app = express()
const port = 3000

// neu la file tinh se vao public
app.use(express.static(path.join(__dirname,'public')))

// dung morgan hien thi console log 
app.use(morgan('combined')) 
//viet tat .hbs cho handlebars
app.engine('.hbs', engine({
  extname: '.hbs'
}
   
));
// su dung handlebars set cai view
app.set('view engine', '.hbs');
// set cai view theo path
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH' , path.join(__dirname, 'resources/views') )

app.get('/', function (req, res) {
    res.render('home')
});
app.get('/search', function (req, res) {
  console.log(req.query.q)//lay value qua url
  res.render('search')
});

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})