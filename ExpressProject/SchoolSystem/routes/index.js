var express = require('express');
const connection = require('../database/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin',function(req,res,next){
res.render("adminhomepage")
})

router.get('/addstudent',function(req,res,next){
  res.render("addstudentformpage")
  })


 router.post('/adddata',(req,res)=>{

    connection.query("insert into Students set ?",[req.body],()=>{
    
    console.log("data stored in database")
  
    res.send(req.body.roll_no + " " + req.body.s_name + " " + req.body.address )
   // res.render("adminhomepage")

  })
 }) 
module.exports = router;

/*
router.post('/adddata',(req,res)=>{
  connection.query("insert into Students set ?",[req.body],()=>{
  console.log("data stored in database")
     })
    // res.send('dataprint',{data:req.body})
  res.send(req.body.roll_no + " " + req.body.s_name + " " + req.body.address)

})
*/