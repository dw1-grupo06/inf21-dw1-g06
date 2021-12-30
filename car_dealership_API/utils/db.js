'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root2',
    password: '123',
    database: "dealership"
});

connection.connect (function (err) {
    if (err) {
        console.log('Error on database connection.');
        throw err;
    }
});

module.exports = connection;