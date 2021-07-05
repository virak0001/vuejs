const mongoose = require('mongoose');
    
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastNmae: {
        type: String,
        required: 'This field is required.'
    },
    password: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
    },
});

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('users', userSchema);