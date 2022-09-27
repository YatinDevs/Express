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
