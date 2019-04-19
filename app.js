const express =require('express');
const session = require('express-session');
const app=express();

app.use(session({
    secret: 'app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    resave:false,
    saveUninitialized:true
}));

const bodyParser=require('body-parser');
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

app.post('/methods/login',function (req, res) {
    res.send(JSON.stringify(req.session))
});

const authorRouter=require('./routers/authorRouter');
app.use(authorRouter);

app.listen(3000,function () {
    console.log('app running')
});
