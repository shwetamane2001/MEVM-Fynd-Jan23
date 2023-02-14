var http=require('http');
var mod=require('./moduleforport3');
http.createServer(function(req,res){
    //creatrServer is for creating a server.
    res.writeHead(200,{'context-type':'text/html'});
    //200 is or successful running
    var x=5;
    var y=10;
    var z=x+y
    res.write("Addition of two numbers is: " +z );
    res.write("   Multiplication result form imported module:" +mod.mult());
    res.end();
}).listen(8070);