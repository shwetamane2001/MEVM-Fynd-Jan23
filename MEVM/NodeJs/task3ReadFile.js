const fs=require("fs");
//Unicode Transformation Format
//File is the parameter
function readUTF8File(filepath){
    fs.readFile(filepath, "utf-8", (data,error) => {
        if(error){
            console.error(error);//prints error if error occurs
            return;
        }
        console.log(data);
    });
}
readUTF8File("./abcd.txt");