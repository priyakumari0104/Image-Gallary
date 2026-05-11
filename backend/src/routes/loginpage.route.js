 const express=require("express");
 const router= express.Router();
  const logincontroller=require("../controllers/login.controller");
 router.post("/login-page",logincontroller.loginpage);
 module.exports=router;