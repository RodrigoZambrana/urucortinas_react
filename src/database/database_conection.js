var mysql = require("mysql");

var con = mysql.createConnection({
  host: "192.168.33.10",
  user: "root",
  password: "root",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
