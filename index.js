const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');

const { HOST, PORT, SQL_PORT, USER, PASSWORD, DB } = require('./config.json')

const app = express();
app.set('view engine','ejs');
app.use(session({secret: 'ThisIsMySecret', saveUninitialized: false, resave: false}));
app.use((req, res, next)=>{
    res.locals.user = req.session.user;
    next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));

require('./routes/api.js')(app);
require('./routes/routes.js')(app);
require('./routes/mailer')(app);

connection = mysql.createConnection({
    host: HOST,
    port: SQL_PORT,
    user: USER,
    password: PASSWORD,
    database: DB
});

app.listen(PORT,()=>{
    console.log(`app runing at port: ${PORT} and host: ${HOST}`)
});