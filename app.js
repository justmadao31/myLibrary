const express = require('express');
const session = require('express-session');
const app = express();
const fs = require('fs');

app.use(session({
    secret: 'app', //secret的值建议使用随机字符串
    cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）
    resave: false,
    saveUninitialized: true
}));

const bodyParser = require('body-parser');
// 解析 application/json
app.use(bodyParser.json());
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static('./dist/'));

app.get('/', function (req, res, next) {
    console.log("登陆");
    fs.readFile('./dist/index.html', function (err, data) {
        if (err)
            console.log("对不起，您所访问的路径出错");
        else {
            res.write(data);
        }
    })
});

app.post('/methods/login', function (req, res) {
    res.send(JSON.stringify(req.session))
});

const authorRouter = require('./routers/authorRouter');
app.use(authorRouter);

app.listen(3000, function () {
    console.log('app running')
});
