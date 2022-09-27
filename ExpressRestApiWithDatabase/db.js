var mysql=require('mysql')
var connection=mysql.createConnection({

      "host":"MySQL",
      "user":"root",
      "pass":"",
      "database":"company"
})

connection.connect(()=> console.log("connnection established"))

var sql= "insert into employeeInfor values(5,'kamal',34,'delhi')"

//var sql= "delete from  employeeInfor where id=4"
// var sql="select * from  employeeInfor where id=24"
connection.query(sql,(error,result)=>{
    if(error)
    console.log("error occured"+error)
    else
    console.log(result)
})
connection.end()