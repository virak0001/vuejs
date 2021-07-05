const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node',
  multipleStatements: true
});

connection.connect((err) => {
    if(!err){
        console.log('Connection success')
    }else {
        console.log('Connection fail');
    }
});
