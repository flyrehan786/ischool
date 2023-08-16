const Joi = require('joi');
const db = require('../services/mysql').db;

function validateExam(exam) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(exam, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM exams`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findExam(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM exam WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveExam(newExam) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO exam VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newExam.first_name, newExam.last_name, newExam.email, newExam.username, newExam.password, newExam.is_admin, newExam.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM exam WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}
async function updateExam(id, updatedExam) {}
async function deleteExam(id) {}
async function deActivateExam(id) {}

exports.validate = validateExam;
exports.findAll = findAll;
exports.findExam = findExam;
exports.saveExam = saveExam; 
exports.updateExam = updateExam;
exports.deleteExam = deleteExam;
exports.deActivateExam = deActivateExam;