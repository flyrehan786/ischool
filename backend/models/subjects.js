const Joi = require('joi');
const db = require('../services/mysql').db;

function validateSubject(Subject) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };
  return Joi.validate(Subject, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM subjects`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findSubject(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM subjects WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveSubject(newSubject) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO subjects VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newSubject.first_name, newSubject.last_name, newSubject.email, newSubject.username, newSubject.password, newSubject.is_admin, newSubject.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM subjects WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}
async function updateSubject(id, updatedSubject) {}
async function deleteSubject(id) {}
async function deActivateSubject(id) {}

exports.validate = validateSubject;
exports.findAll = findAll;
exports.findSubject = findSubject;
exports.saveSubject = saveSubject; 
exports.updateSubject = updateSubject;
exports.deleteSubject = deleteSubject;
exports.deActivateSubject = deActivateSubject;