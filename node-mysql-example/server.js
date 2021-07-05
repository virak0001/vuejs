
const express = require('express');
var app = express();
var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.listen(8000, () => {
    console.log('Express server started at port : 8000')
});

    
const StudentRoute = require('./Routes/Student')
app.use('/',StudentRoute);
