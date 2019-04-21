var db = {};
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'zq_test'
});

db.query = function (sql, param, callback) {

    if (!sql) {
        callback();
        return;
    }
    pool.query(sql,param ,function (err, rows, fields) {
        if (err) {
            console.log(err);
            callback(err, null);
            return;
        }
        ;

        callback(null, rows, fields);
    });

    console.log(sql)
}
module.exports = db;
