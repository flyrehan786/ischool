const { check_connection } = require('./services/mysql');
const express = require("express");
const app = express();

app.use(express.json());
// Users Route.
const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    check_connection();
});

module.exports = server;
