'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: '12345678',
    database: "dealership"
});

connection.connect (function (err) {
    if (err) {
        console.log('Error on database connection.');
        throw err;
    }
});

module.exports = connection;