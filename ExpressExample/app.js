// wap to display message on web browser
// npm i express --g
// create your file
const express = require ('express')
var app = express()

app.get('/',(req,res)=>
{
    res.send("home page")
})

// localhost:3400/student/neha
app.get('/student/:name',(req,res)=>
{
    res.send("student page"+req.params.name)
})

app.get('/admin',(req,res)=>
{
    res.send("admin page")
})

app.get('/login',(req,res)=>{
   // _dirname = global variable ---------> current dir path
    res.sendFile(__dirname + "/" + "login.html")
     

})
app.get('/logindata',(req,res)=>
{
var user = req.query.user1
var pass = req.query.pass1
res.send( " welcome " + user + " " + pass)

})

app.listen(3400,()=>console.log(" server started "))



// to run this file ---> npx nodemon app.js

// whenever we fetch data from url we use get parameter