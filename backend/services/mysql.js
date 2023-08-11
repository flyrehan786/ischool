let mysql2 = require('mysql2');
let pool = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "school_db"
});
// Connect to the database
function checkConnection() {
    // Acquire a connection from the pool
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error acquiring connection from pool:', err);
            return;
        }

        console.log('Connected to the database.');

        // Release the connection back to the pool
        connection.release();
    });
}
module.exports.db_connection = checkConnection;
module.exports.db = pool;