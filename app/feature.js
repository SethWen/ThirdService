/**
 * author: Shawn
 * time  : 2017/11/16 11:46
 * desc  :
 * update: Shawn 2017/11/16 11:46
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '172.16.10.207',
    user: 'root',
    password: 'root',
    database: 'game'
});

connection.connect();

// connection.query('SELECT * FROM plugin', function (error, results, fields) {
connection.query({
        sql: 'INSERT INTO plugin (user_name,event_type,created_at) VALUES ("红孩儿", 1, ?);',
        // values: [Date.now().toString()],
        values: [Date.now().toString()],
    },

    function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
    });

connection.end();