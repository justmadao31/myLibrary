const express =require('express');

const router=express.Router();

const db=require('../mysql');

router.post('/methods/author/getAuthorList',(request, response)=> {

    var sql='select * from author where 1=1 ';

    if (request.body.name != '') sql+="and name like '%"+request.body.name+"%'"

    db.query(sql, function(err, rows, fields){
        if (err) {
            console.log(err);
            response.send(JSON.stringify({result:null,status:0}));
            return;
        }
        var result={result:rows,status:1};
        response.send(JSON.stringify(result))
    });


});

router.post('/methods/author/saveAuthor',(req,res)=>{
    var sql='';
    if (req.body.id == null) {
        sql="insert into author values("+req.body.id+",'"+req.body.group+"','"+req.body.name+"',"+req.body.score+",sysdate(),'"+req.body.folder+"','"+req.body.info+"');"
    }else {
        sql="update author set `group`='"+req.body.group+"',`name`='"+req.body.name+"',`score`="+req.body.score+",`last_update_time`=sysdate(),folder='"+req.body.folder+"',`info`='"+req.body.info+"' where `id`="+req.body.id
    }
    console.log(sql);

    db.query(sql, function(err, rows, fields){
        if (err) {
            console.log(err);
            res.send(JSON.stringify({result:null,status:0}));
            return;
        }
        var result={result:rows,status:1};
        res.send(JSON.stringify(result))
    });
});


module.exports=router;
