 const moongoose=require('mongoose');
 async function connectDB(){
    await moongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
 }
 module.exports=connectDB;