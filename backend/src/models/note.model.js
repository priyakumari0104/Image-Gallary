 const mongoose=require('mongoose');
 const noteSchema= new mongoose.Schema({
    tittle:String,
    description:String
 });
 const notemodel= mongoose.model("note",noteSchema);;
 module.exports=notemodel;