 const express= require('express');
const app = express();
const path = require('path');
const fs= require('fs');

app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set("view engine","ejs"); 


 app.get("/",function(req,res){
   fs.readdir(`./files`,function(err,files){
   res.render("name",{files:files});
   })
    
 });
 app.get("/files/:filename",function(req,res){
  fs.readFile(`./files/${req.params.filename}`,'utf-8',function(err,data){
  // res.render('para');});
  res.render('para',{filename:req.params.filename,content:data});
  });
 });
 app.get("/edit/:filename",function(req,res){
  res.render('edit',{filename:req.params.filename});
 })
  app.post("/create",function(req,res){
   console.log(req.body);
    // req.end("file created");
    fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.details.split(" ").join(''), function(err){
        if (err) {
            console.error(err);
        }
    });
      res.redirect("/");
});
app.post("/edit",function(req,res){
  // console.log(req.body);
  fs.rename(`./files/${req.body.prev}`,`./files/${req.body.new}`,function(err){
  if(err){
          console.log("Rename error:", err);
          return res.send("Error renaming file");
      }

      console.log("File renamed successfully");
      res.redirect("/");
  });
  });
  

app.listen(3000,function(){
 console.log("server is running on port 3000");
 });