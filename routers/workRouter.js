const express = require('express');

const router = express.Router();

const db = require('../mysql');

router.post('/methods/work/getWorkList', (req, res) => {
    var sql = `select * from library where 1=1`;
    var param=[]
    if (req.body.name != ''){
        sql += ` and title like "%"?"%" `;
        param.push(req.body.name)
    }
    if (req.body.aid != 0){
        sql += ` and author_id=? `;
        param.push(req.body.aid)
    }

    db.query(sql, param, function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.send(JSON.stringify({result: null, status: 0}));
            return;
        }
        var result = {result: rows, status: 1};
        res.send(JSON.stringify(result))
    });


});

router.post('/methods/work/deleteWork', (req, res) => {
    var sql = `delete from library where id=?`;

    db.query(sql, [req.body.id], function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.send(JSON.stringify({result: null, status: 0}));
            return;
        }
        var result = {result: rows, status: 1};
        res.send(JSON.stringify(result))
    });
});

router.post('/methods/work/saveWork', (req, res) => {
    var sql = `insert into library values`;
    var param = [];
    for (let i = 0; i < req.body.workList.length; i++) {
        if (i != 0) sql += ',';
        sql += `(null,?,?,?,?)`;
        param=param.concat([req.body.author.id, req.body.workList[i].title, req.body.workList[i].type, req.body.workList[i].is_chinese])
    }

    db.query(sql, param, function (err, rows, fields) {
        if (err) {
            console.log(err);
            res.send(JSON.stringify({result: null, status: 0}));
            return;
        }
        var result = {result: rows, status: 1};
        res.send(JSON.stringify(result))
    });
});


module.exports = router;