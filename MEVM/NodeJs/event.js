var fs=require('fs');//import statement
//imports the filestream from node modules
//fs=filestream is an inbuilt module
//module: fs
//collection of functionalities which are not user created bit available from node js
var rs=fs.createWriteStream('./demo.txt');
//var is shortform of variable used to store local values/temporary values
//reading the outside placed demotext file

rs.on('open', function(){
    console.log('The file is open');
});