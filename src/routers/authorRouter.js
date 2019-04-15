const express =require('express');

const router=express.Router();

router.post('/methods/author/getAuthorList',(request, response)=> {
    console.log(request.body)
    response.send(JSON.stringify(request.body))
});

router.get('/author',(req,res)=>{
    res.send('aaa')
})


module.exports=router;