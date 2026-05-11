const mongoose=require('mongoose');
const postschema=new mongoose.Schema({
    image:String,
    caption:String
});
const postemodel= new mongoose.model("post",postschema);
module.exports=postemodel;