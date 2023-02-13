var http=require('http');
http.createServer(function(req,res){
    //creatrServer is for creating a server.
    res.writeHead(200,{'context-type':'text/html'});
    //200 is or successful running
    res.write("This is the localhost port 8006");
    res.end();
}).listen(8006);