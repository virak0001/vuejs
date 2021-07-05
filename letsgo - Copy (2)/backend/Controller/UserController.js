const mongoose = require('mongoose');
const Users = mongoose.model('users');

exports.index = function(req, res) {
    res.send('Hello world')
}