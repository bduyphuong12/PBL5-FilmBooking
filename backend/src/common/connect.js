var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'Lsb9R22Ws7',
    password: 'F6sLZZ3km3',
    database: 'Lsb9R22Ws7'
});
connection.connect(function (err, connection) {
    if(err) console.log("ket noi that bai");
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });


module.exports = connection;