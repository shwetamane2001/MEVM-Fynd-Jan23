var math=require('mathjs');
var p=100000;
var r=10;
var n=2;
var t=1;
var temp=1+(r/n);
var a=math.pow(temp,(n*t));
var interest=p*a;
console.log(interest);