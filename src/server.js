const express = require('express')
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express()

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config view, template engine
configViewEngine(app);

//declare routes
app.use('/', webRoutes);

// A simple SELECT query
connection.query(
    'select * from users',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})