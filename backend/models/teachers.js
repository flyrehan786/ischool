const Joi = require('joi');
const db = require('../services/mysql').db;

function validateTeacher(teacher) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };
  return Joi.validate(teacher, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM teachers`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
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
    db.execute(`INSERT INTO teachers VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newTeacher.first_name, newTeacher.last_name, newTeacher.email, newTeacher.username, newTeacher.password, newTeacher.is_admin, newTeacher.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM teachers WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}
async function updateTeacher(id, updatedTeacher) {}
async function deleteTeacher(id) {}
async function deActivateTeacher(id) {}

exports.validate = validateTeacher;
exports.findAll = findAll;
exports.findTeacher = findTeacher;
exports.saveTeacher = saveTeacher; 
exports.updateTeacher = updateTeacher;
exports.deleteTeacher = deleteTeacher;
exports.deActivateTeacher = deActivateTeacher;