// --------------- import database ------------------//
require('./Database/database')


const express = require('express');

const bodyParser = require('body-parser');

const app = express();
var cors = require('cors');
app.use(cors())
// -----------parse application/x-www-form-urlencoded----------------//
app.use(bodyParser.urlencoded({ extended: true }))
// -----------parse application/json-----------------//
app.use(bodyParser.json())

// -----------Server run port: 9000 -----------------//
app.listen(9090, (err)=> {
    if(!err) console.log("Server run at port: 9090")
})

// ---------- Import route of users ----------------//
const UserRoute = require('./Route/route')
app.use('/', UserRoute);
app.use('/store', UserRoute);
app.use('/:id/delete', UserRoute);