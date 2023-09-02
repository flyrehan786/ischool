const Joi = require('joi');
const db = require('../services/mysql').db;

function validateTeacher(teacher) {
  const schema = {
    first_name: Joi.string().min(2).max(45).required(),
    last_name: Joi.string().min(2).max(45).required(),
    gender: Joi.string().min(1).max(1).required(),
    qualification: Joi.string().min(2).max(45).required(),
    designation: Joi.string().min(2).max(45).required(),
    joining_date: Joi.string().min(2).max(45).required(),
    post_office: Joi.string().min(2).max(45).required(),
    tehsil: Joi.string().min(2).max(45).required(),
    district: Joi.string().min(2).max(45).required(),
  };
  return Joi.validate(teacher, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM teachers`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findTeacher(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM teachers WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveTeacher(newTeacher) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO teachers VALUES(default, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1 , NOW(), NOW(), 1, 1)`,
      [
        newTeacher.first_name,
        newTeacher.last_name,
        newTeacher.gender,
        newTeacher.qualification,
        newTeacher.designation,
        newTeacher.joining_date,
        newTeacher.post_office,
        newTeacher.tehsil,
        newTeacher.district,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM teachers WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM teachers WHERE id = ?;`,[insertedId], (err, result) => {
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
async function updateTeacher(id, updatedTeacher) {
  return new Promise((resolve, reject) => {
    db.execute(`Update teachers SET first_name=?, last_name=?, gender=?, qualification=?, designation=?, joining_date=?, post_office=?, tehsil=?, district=? WHERE id=?;`,
      [
        updatedTeacher.first_name,
        updatedTeacher.last_name,
        updatedTeacher.gender,
        updatedTeacher.qualification,
        updatedTeacher.designation,
        updatedTeacher.joining_date,
        updatedTeacher.post_office,
        updatedTeacher.tehsil,
        updatedTeacher.district,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM teachers WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}
async function deleteTeacher(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM teachers WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  });
}
async function deActivateTeacher(id) {
  console.log(id);
  return new Promise((resolve, reject) => {
    db.execute(`UPDATE teachers SET status=? WHERE id=?`, [0, id], (err, result) => {
      console.log(result);
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  })
}
async function activateTeacher(id) {
  console.log(id);
  return new Promise((resolve, reject) => {
    db.execute(`UPDATE teachers SET status=? WHERE id=?`, [1, id], (err, result) => {
      console.log(result);
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  })
}
exports.validate = validateTeacher;
exports.findAll = findAll;
exports.findTeacher = findTeacher;
exports.saveTeacher = saveTeacher;
exports.updateTeacher = updateTeacher;
exports.deleteTeacher = deleteTeacher;
exports.deActivateTeacher = deActivateTeacher;
exports.activateTeacher = activateTeacher;