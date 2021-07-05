const mongoose = require('mongoose');
const students = mongoose.model('users');


exports.store = function(req, res){
    var student = new students();
    student.name = req.body.name
    student.email = req.body.email
    student.mobile = req.body.mobile
    student.city = req.body.city
    student.save((err,doc)=>{
        if (err) {
            if (err.name || err.email || err.mobile || city.city == 'ValidationError') {
                handleValidationError(err, req.body);
                return res.status(400).send({errors: req.body })
            } else {
                console.log('Error during record insertion : ' + err);
            }
          } else {
            res.json(doc)
          }
    })
}

exports.delete = function(req,res){

    students.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send('success');
        }
        else { console.log('Error in student delete :' + err); }
    });
}

exports.index = function(req,res) {
    students.find((err, docs) => {
        if (!err) {
           res.json(docs)
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
};

function handleValidationError(err, body){
    for(field in err.errors){
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            case 'mobile':
                body['mobileError'] = err.errors[field].message;
                break;
            case 'city':
                body['cityError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}