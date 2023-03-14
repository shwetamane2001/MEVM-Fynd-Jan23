//step2:map the request param with the controller from html file
//use body parser and fetch url parser from it
//view and controller will br in sync

var express=require('express');
var app=express();
var bodyParser=require('body-parser');

 var urlencodedParser=bodyParser.urlencoded({extended:false});
 app.use(express.static('public'));

 app.get('IndexStep1.html',function(req,res){
    res.sendFile(__dirname+"/IndexStep1.html");
 });

 app.post('/post',urlencodedParser,function(req,res){
    response={
        username:req.body.username,
        password:req.body.passsword
    }
    console.log(response);
    res.send(JSON.stringify(response));
 });

 //step3:create server instance within the controller
 var server=app.listen(8315,function(){
    console.log("server is running");
 });