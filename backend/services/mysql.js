let mysql2 = require('mysql2');
let connection = mysql2.createPool({
  host:"localhost",
  user: "root",
  password: "root",
  database: "school_db"
});
module.exports.db = connection;