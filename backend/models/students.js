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
      if (err) reject(err);
      if (result.length > 0) resolve(result);
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
    db.execute(`INSERT INTO students VALUES(default,?,?,?,?,?,?,?,?,?,?,1, NOW(), NOW(), 1, 1)`,
      [
        newStudent.first_name,
        newStudent.last_name,
        updatedStudent.gender,
        updatedStudent.cnic,
        updatedStudent.age,
        updatedStudent.father_name,
        updatedStudent.father_cnic,
        updatedStudent.post_office,
        updatedStudent.tehsil,
        updatedStudent.district,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM students WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0].id);
          else resolve(null);
        })
      });
  })
}
async function updateStudent(id, updatedStudent) {
  return new Promise((resolve, reject) => {
    db.execute(`Update students SET first_name=?, last_name=?, gender=?, cnic=?, age=?, father_name=?, father_cnic=?, post_office=?, tehsil=?, district=? WHERE id=?;`,
      [
        updatedStudent.first_name,
        updatedStudent.last_name,
        updatedStudent.gender,
        updatedStudent.cnic,
        updatedStudent.age,
        updatedStudent.father_name,
        updatedStudent.father_cnic,
        updatedStudent.post_office,
        updatedStudent.tehsil,
        updatedStudent.district,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM students WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0].id);
          else resolve(null);
        })
      })
  })
}
async function deleteStudent(id) {
  db.execute(`DELETE FROM students WHERE id = ${id};`, (err, result) => {
    if (err) reject(err);
    if (result.length > 0) resolve(result);
    else resolve(null);
  })
 }
async function deActivateStudent(id) { 
  db.execute(`updated students SET status=? FROM students WHERE id = ?;`,[ id, 0 ], (err, result) => {
    if (err) reject(err);
    if (result.length > 0) resolve(result);
    else resolve(null);
  })
}

exports.validate = validateStudent;
exports.findAll = findAll;
exports.findStudent = findStudent;
exports.saveStudent = saveStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
exports.deActivateStudent = deActivateStudent;