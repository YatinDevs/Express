// npm i express --save

const express= require('express')
const app = express()

app.listen(4600,(err)=>{

    if(err)
      console.log("server cannot start")
    else
      console.log("server  started!!!")
})


// localhost:4600/studentdata
app.get("/",(req,res)=>{

   console.log("<h1> WELCOME USER </h1>")
   
   res.send("<h1> WELCOME USER </h1>")
})


app.get('/login',(req,res)=>{
    // _dirname = global variable ---------> current dir path
     res.sendFile(__dirname + "/" + "register.html")
      
 
 })
/*
 folder - view  
 public - images
          css
          html 
          javascript
*/          