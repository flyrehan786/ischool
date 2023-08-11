const dbConnection = require('./services/mysql').db_connection;
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    dbConnection();
});

module.exports = server;
