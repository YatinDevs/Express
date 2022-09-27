var express = require('express');
const app = require('../app');
const connection = require('../database/db');
var router = express.Router();

//localhost:3000/admin/
router.get('/', function(req, res, next) {
    //res.send("this is admin page ")
    res.render('adminhomepage')
});

//localhost:3000/admin/addstudent
router.get('/addstudent', (req, res) =>{
   // res.send("Add the Student Details  ")
    res.render("addstudentformpage")// this will return addstudentformpage
   });

router.post('/adddata',(req,res)=>{
     connection.query("insert into Students set ?",[req.body],()=>{
     console.log("data stored in database")
        })
       // res.send('dataprint',{data:req.body})
     res.send(req.body.roll_no + " " + req.body.s_name + " " + req.body.address)

})

//localhost:3000/admin/displaystudent
   router.get('/displaystudent', (req, res) =>{
    //res.send("Display the Student Details  ")
    res.render("adminhomepage")// this will return adminhomepage from views it contains html files
   });


   
module.exports = router;