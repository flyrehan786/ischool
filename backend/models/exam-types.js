const Joi = require('joi');
const db = require('../services/mysql').db;


function validateExamType(examType) {
  const schema = {
    name: Joi.string().min(2).max(45).required(),
  };
  return Joi.validate(examType, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM exam_types`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findExamType(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM exam_types WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveExamType(newExamType) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO exam_types VALUES(default,?,?, NOW(), NOW())`,
      [
        newExamType.name,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM exam_types WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM exam_type WHERE id = ?;`,[insertedId], (err, result) => {
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
async function updateExamType(id, updatedExamType) {
  return new Promise((resolve, reject) => {
    db.execute(`Update exam_type SET name=? WHERE id=?;`,
      [
        updatedExamType.name,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM exam_types WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}
async function deleteExamType(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM exam_types WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
    });
 }

exports.validate = validateExamType;
exports.findAll = findAll;
exports.findExamType = findExamType;
exports.saveExamType = saveExamType;
exports.updateExamType = updateExamType;
exports.deleteExamType = deleteExamType;