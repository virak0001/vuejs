const json = require('express');
var connection = require('../Database/mysql');
exports.index = function(req,res) {
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM students", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
    });
    connection.destroy();
};
