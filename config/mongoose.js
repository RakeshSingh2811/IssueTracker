//Mongo Db Connection
const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect(`mongodb://127.0.0.1/IssueTracker`);
const db= mongoose.connection;
db.on('error',console.error.bind(console,"Error Connecting to mongoDB"));

db.once('open',function(){
    console.log("Connected Successfully")
})
module.exports=db;