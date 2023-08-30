const { check_connection } = require('./services/mysql');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users');
const authRoute = require('./routes/auth');
const studentRoute = require('./routes/students');
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoute);
app.use('/api/students', studentRoute);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    check_connection();
});

module.exports = server;
