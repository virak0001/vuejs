const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/letsgo',{useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(!err){
        console.log('Connection succeed');
    }else {
        console.log('Connection fail!');
    }
});
require('../Model/Student');