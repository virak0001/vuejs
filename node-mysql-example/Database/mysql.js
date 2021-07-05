const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node',
  multipleStatements: true
});
module.exports = connection;