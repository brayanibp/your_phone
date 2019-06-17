const mysql = require('mysql');
const express = require('express');
const { HOST, PORT, SQL_PORT, USER, PASSWORD, DB } = require('./config.json')

const app = express();
require('./routes/routes.js')(app);

connection = mysql.createConnection({
    host: HOST,
    port: SQL_PORT,
    user: USER,
    password: PASSWORD,
    database: DB
});


connection.

app.listen(PORT,()=>{
    console.log(`app runing at port: ${PORT} and host: ${HOST}`)
});