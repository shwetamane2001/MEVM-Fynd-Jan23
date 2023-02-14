
var num;
function evenOdd(num){(num,(data,error) => {
        if(error){
            console.error(error);
            return;
        }
        if(num%2==0){
            console.log(data);
        }
        else{
            console.log("odd");
        }
       
    });
}
evenOdd(12);