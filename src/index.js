const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { extname } = require('path'); // dat lai ten
const mysql = require('mysql');
const session = require('express-session');
// const flash = require('connect-flash');

// const expressValidator = require('express-validator');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db/index');

// app.use(session({
//     secret:'geeksforgeeks',
//     saveUninitialized: true,
//     resave: true
// }));

// app.use(flash());

// app.use(expressValidator());  //this line to be addded

// su dung thu vien body-parser - form data - input ra console.log
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());
//gui code js

// neu la file tinh se vao public
app.use(express.static(path.join(__dirname, 'public')));

// dung morgan hien thi console log
app.use(morgan('combined'));
//viet tat .hbs cho handlebars
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
// su dung handlebars set cai view
app.set('view engine', '.hbs');
// set cai view theo path
app.set('views', path.join(__dirname, 'resources/views'));

// console.log('PATH' , path.join(__dirname, 'resources/views') )

//Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
