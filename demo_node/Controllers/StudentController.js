const mongoose = require('mongoose');
const students = mongoose.model('students');

exports.index = function(req, res){
    res.send('Hollow world');
}

exports.store = function(req, res){
    var student = new students();
    student.name = "virak";
    student.email = "virakcambodia44@gmail.com";
    student.mobile = "099393709";
    student.city = "Pursat";
    student.save((err,doc)=>{
        if(!err){
            res.redirect('/');
        }else {
            console.log('insert fail')
        }
    })
}

exports.delete = function(req,res){
    students.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/');
        }
        else { console.log('Error in student delete :' + err); }
    });
}