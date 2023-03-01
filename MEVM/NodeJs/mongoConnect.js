var mongoClient= require("mongodb").MongoClient;
// require("dotenv").config();
const url= "mongodb://localhost:27017";
 mongoClient.connect(url,function (error,db) 
{
    if(error)
    throw error;
    await db.db("socialApp");
    var dbo= db.db("socialApp");
    dbo.collection("users").findOne({},function (error, result){
        if(error)
        throw error;
        console.log(result.name);
        db.close();
    });
});



/**
 * Connecting to mongodb and runing find queries on socialApp db
 */
