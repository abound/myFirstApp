

var express=require('express')
var fs=require('fs')
var app=express()

app.all('*', function(req, res, next) {             //设置跨域访问
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });


app.get('/script',function(req,res){
    fs.readFile('./db.json',function(err,date){
        if(err){
            return res.status(500).send('server error')
        }
        var scripts=JSON.parse(date).message
        var scripts=JSON.stringify(scripts)
        res.end(scripts)
    })
})


app.listen(8000,function(){
    console.log("running");
    
})