const Joi = require('joi');
const db = require('../services/mysql').db;


function validateStudent(student) {
  const schema = {
    first_name: Joi.string().min(3).max(45).required(),
    last_name: Joi.string().min(3).max(45).required(),
    gender: Joi.string().min(1).max(1).required(),
    cnic: Joi.string().min(10).max(45).required(),
    age: Joi.string().min(1).max(3).required(),
    father_name: Joi.string().min(5).max(45).required(),
    father_cnic: Joi.string().min(10).max(45).required(),
    post_office: Joi.string().min(5).max(45).required(),
    tehsil: Joi.string().min(5).max(45).required(),
    district: Joi.string().min(5).max(45).required(),
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
        newStudent.gender,
        newStudent.cnic,
        newStudent.age,
        newStudent.father_name,
        newStudent.father_cnic,
        newStudent.post_office,
        newStudent.tehsil,
        newStudent.district,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM students WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM students WHERE id = ?;`,[insertedId], (err, result) => {
              if (err) reject(err);
              if (result.length > 0) {
                resolve(result[0]);
              } else {}
            });
          }
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
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}
async function deleteStudent(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM students WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
    });
 }
async function deActivateStudent(id) { 
  return new Promise((resolve,reject) => {
    db.execute(`UPDATE students SET status=? WHERE id=?`, [0, id], (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  })
}
async function activateStudent(id) { 
  return new Promise((resolve,reject) => {
    db.execute(`UPDATE students SET status=? WHERE id=?`, [1, id], (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  })
}

exports.validate = validateStudent;
exports.findAll = findAll;
exports.findStudent = findStudent;
exports.saveStudent = saveStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
exports.deActivateStudent = deActivateStudent;
exports.activateStudent = activateStudent;