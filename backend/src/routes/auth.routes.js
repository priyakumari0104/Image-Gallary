 const express= require('express');
  const route= express.Router();
  const authcontroller= require('../controllers/auth.controllers');
  route.post("/signup",authcontroller.signup);
    
  module.exports=route;