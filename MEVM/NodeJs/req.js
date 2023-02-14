var http=require('http');
var dt = require('./ownModule');
//dt: today's date
http.createServer(function (req,res){
    //res: response to request(req)
    //response has 3 features:Head/Body and a Tail
    //Head:Code indicating success or failure or any other status
    //200: success code, format: text/hrml, json,xel
    res.writeHead(200, {'Content-Type':'text/html'});
    //update the body of response: date coming from different user created module
    res.write("The date and time are curently: " + dt.getCurrentDate());
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/html user defined module
    res.end();
    //ending the writing functionaliti for a requet response function
}).listen(8081);
//mentioning which part our application will run on the server