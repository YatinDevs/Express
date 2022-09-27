//npm i mysql2 
// create database - nodedb or use your own database
//create table
// id name age and city
var mysql= require('mysql2')
//in create connection  write connection information of mysql workbench /your database info 


// file with database configuration
var connection=mysql.createConnection({
    "host":"localhost",
    "user":"root",
    "password":"cdac",
    "database":"companydb"
})

// to use in another files exporting connection
module.exports=connection



//connection.connect(()=>console.log("connection established"))
var sql="insert into employee values(105,'snehal',25,'noida')"
//var sql="insert into employees values(?,?,?,?)"
//var sql="delete from employees where id=?"
//var sql="select * from employeeInfor where id=24"
connection.query(sql,(error,result)=>
{
    if(error) console.log("error occured"+ error)
    else
    console.log(result)
})
connection.end()