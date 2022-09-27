

var express=require('express')
var app= express();
// npm i express mysql body-parser

// creating connection with db1 file with database connection
var connection = require('./db1')




// localhost:3000
// postman tool to check end product

var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//form -->action 


app.get('/',(req,res)=>{

    
    var sql = "select * from employee"
   
    connection.query(sql,(err,result)=>{

        if(err)
         console.log(err)
        else 
         res.send(result)
    })
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
     
    res.send(" this is a post method" +req.body.id +req.body.name + req.body.code)
})

// creating inbuild server with call backfunction
app.listen(3000,(err)=>{
    if(err)
      throw err
else
    
    console.log("server started")})
     
// to excute this program 
// npx nodemon server1.js