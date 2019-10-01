const mysql = require('mysql');

const con = mysql.createConnection({
    host: "rm-d9ji2vf8691hofn3amo.mysql.ap-southeast-5.rds.aliyuncs.com",
    user: "elnuhdba",
    password: "cricket169!",
    database: "bkpsdmd",
    //dateStrings:true,
    //timezone: "Asia/Jakarta",
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
