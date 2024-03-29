// Set up MySQL connection.
var mysql = require("mysql");
var dotenv = require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: process.env.HOST
      , user: process.env.USERNAME
      , password: process.env.PASSWORD
      , port: 3306
      , database: process.env.DATABASE
  });

};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection;
