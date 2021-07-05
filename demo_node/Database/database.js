const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoDB',{useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(!err){
        console.log('Connection succeed');
    }else {
        console.log('Connection fail!');
    }
});
require('../Modes/student')
