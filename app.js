const authorRouter=require('./routers/authorRouter');
const express =require('express');
const app=express();
const bodyParser=require('body-parser');
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

app.use(authorRouter);

app.listen(3000,function () {
    console.log('app running')
});
