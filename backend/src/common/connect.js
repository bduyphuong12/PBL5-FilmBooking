var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'Lsb9R22Ws7',
    password: 'F6sLZZ3km3',
    database: 'Lsb9R22Ws7'
});
pool.query('select 1 + 1', (err, rows) => { /* */ });

module.exports = pool;
// var mysql = require('mysql');

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'pbl5'
// });

// connection.connect(function (err, connection) {
//     if(err) console.log("ket noi that bai");
// });

// module.exports = connection;