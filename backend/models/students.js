const Joi = require('joi');
const db = require('../services/mysql').db;


function validateStudent(student) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };
  return Joi.validate(student, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM students`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findStudent(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM students WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveStudent(newStudent) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO students VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newStudent.first_name, newStudent.last_name, newStudent.email, newStudent.username, newStudent.password, newStudent.is_admin, newStudent.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM users WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}
async function updateStudent(id, updatedStudent) {}
async function deleteStudent(id) {}
async function deActivateStudent(id) {}

exports.validate = validateStudent;
exports.findAll = findAll;
exports.findStudent = findStudent;
exports.saveStudent = saveStudent; 
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
exports.deActivateStudent = deActivateStudent;