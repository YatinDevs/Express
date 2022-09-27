// npm i express --save

const express= require('express')
const app = express()

app.listen(4500,(err)=>{

    if(err)
      console.log("server cannot start")
    else
      console.log("server  started!!!")
});

// localhost:4500/studentdata
app.get("/studentdata",(req,res)=>{

    res.send("This is Student Data")
})

app.get("/studentdata/:name/:pin",(req,res)=>{

    res.send("This is Student Data"+ "  " +  req.params.name + "  " + req.params.pin)
})