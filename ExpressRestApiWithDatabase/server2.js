
// express installed
var express=require('express')
var app= express();


// creating connection with db1 file with database connection
// calling the database
var connection = require('./db2')
// created variable connection to connect with db1



// npm i express mysql body-parser
// required in case of post 
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//form -->action 

// view all data info from database
app.get('/',(req,res)=>{

    
    var sql = "select * from employee;"
   
    // connection variable 
    connection.query(sql,(err,result)=>{

        if(err)
         console.log(err)
        else 
         res.send(result)
    })
   
})
//localhost:3000/


// search data from database
// id goes through url and it is retrieved through params
app.get('/:id',(req,res)=>{

    
    var sql = "select * from employee where id=?;"
   
    // connection variable 
    connection.query(sql,[req.params.id],(err,result)=>{

        if(err)
         console.log(err)
        else 
         res.send(result)
    })
   
})


app.post("/insertdata",(req,res)=>{
     
    var data =req.body
        
    var sql = "Insert into employee set ?"
    connection.query(sql,[data],(err,result)=>{
        
        if(err)
         console.log(err)
        else 
         res.send(result)
    })
   
})
//localhost:3000/admin

// delete data
app.delete('/deletedata/:id'),(req,res)=>{

    var sql = "delete from employee where id=?"

    connection.query(sql,[req.params.id],(err,result)=>{
        
        
         res.send(result)
    })


}


app.put('/updatedata/:id'),(req,res)=>{

    var sql = "update employee set city=? where id=?"

    connection.query(sql,[req.body.city,req.params.id],(err,result)=>{
        
        
         res.send(result)
    })


}


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
// npx nodemon server2.js

