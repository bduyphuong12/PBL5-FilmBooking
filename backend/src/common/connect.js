var mysql = require('mysql');

const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: 'Lsb9R22Ws7',
    password: 'F6sLZZ3km3',
    database: 'Lsb9R22Ws7'
});
pool.query('select 1 + 1', (err, rows) => { /* */ });