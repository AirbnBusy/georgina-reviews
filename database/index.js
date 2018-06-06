const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'userreviews'
});

connection.connect();


module.exports = {

}