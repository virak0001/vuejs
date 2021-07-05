require('./Database/mysql');
const express = require('express');
var app = express();
app.listen(8000, () => {
    console.log('Express server started at port : 8000')
});

const StudentRoute = require('./Routes/Student')
app.use('/',StudentRoute);
