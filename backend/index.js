const { check_connection } = require('./services/mysql');
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users');
const authRoute = require('./routes/auth');
const studentRoute = require('./routes/students');
const teacherRoute = require('./routes/teachers');
const gradesRoute = require('./routes/grades');
const subjectsRoute = require('./routes/subjects');

app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoute);
app.use('/api/students', studentRoute);
app.use('/api/teachers', teacherRoute);
app.use('/api/grades', gradesRoute);
app.use('/api/subjects', subjectsRoute);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
    check_connection();
});

module.exports = server;
