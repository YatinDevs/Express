

var express=require('express')
var app= express();
var connection = require('./db1')
// npm i express mysql body-parser
//form -->action 
// creating inbuild server with call backfunction
// form ---> action
// localhost:3000
// postman tool to check end product
//localhost:3000
//postman 
app.get('/',(req,res)=>{
    var sql = "select * from employee"
    res.send("welcome to home page")
})
//localhost:3000/admin
app.get('/admin',(req,res)=>{

    res.send("welcome admin")
})
app.get('/admin/:id',(req,res)=>{

    res.send("admin page with parameter")
})
//localhost:3000/admin
app.post("/admin",(req,res)=>{
    res.send(" this is a post method")
})

app.listen(3000,(err)=>{
    if(err)
      throw err
else
    
    console.log("server started")
})
     
// to excute this program 
// npx nodemon server.js