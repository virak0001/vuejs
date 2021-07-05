// --------------- import database ------------------//
require('./Database/database')


const express = require('express');

const bodyParser = require('body-parser');
const { get } = require('mongoose');

const app = express();

// -----------parse application/x-www-form-urlencoded----------------//
app.use(bodyParser.urlencoded({ extended: true }))



// -----------parse application/json-----------------//
app.use(bodyParser.json())

// -----------Server run port: 9000 -----------------//
app.listen(9000, (err)=> {
    if(!err) console.log("Server run at port: 9000")
})

// ---------- Import route of users ----------------//
const UserRoute = require('./Route/route')
app.use('/', UserRoute);