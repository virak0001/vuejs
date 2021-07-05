require('./Database/database');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())

const StudentRoute = require('./Route/StudentRoute');
app.use('/', StudentRoute);
app.use('/store', StudentRoute);
app.use('/delete', StudentRoute);

// start at port: 3000
app.listen(3000, (err) => {
    if(!err){
        console.log("Server run at host: 3000")
    }
})