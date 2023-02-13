var http=require('http');
var mod=require('./moduleforport3')
http.createServer(function(req,res){
    //creatrServer is for creating a server.
    res.writeHead(200,{'context-type':'text/html'});
    //200 is or successful running
    res.write("This is the localhost port 8000");
    var x=10;
    var y=20;
    var z=Math.sqrt(x*y);
    res.write("The answer for the given operation is:" +z);
    res.write("The imported answer from module is: " +mod.mult());
    res.end();
}).listen(8000);