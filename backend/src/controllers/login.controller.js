  const usermodel=require("../models/user.model");
  async function loginpage(req,res){
     const {email,password}=req.body;
     const user=await usermodel.findOne({email});
     
     if(!user){
        return res.status(400).json({
            message:"user not found"
        })
     }
      if(user.password!==password){
        return res.status(400).json({
            message:"invalid password"
        })
      }
       res.status(200).json({
        message:"login successful",
        user:user
       }) }
       module.exports={loginpage};