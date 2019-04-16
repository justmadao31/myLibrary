const express =require('express');

const router=express.Router();

const db=require('../mysql');

router.post('/methods/author/getAuthorList',(request, response)=> {

    db.query('select * from author', function(err, rows, fields){
        if (err) {
            console.log(err);
            return;
        }
        var result={result:rows};
        response.send(JSON.stringify(result))
    });


});

router.get('/author',(req,res)=>{
    res.send('aaa')
})


module.exports=router;
