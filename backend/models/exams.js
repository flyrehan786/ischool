const Joi = require('joi');
const db = require('../services/mysql').db;

function validateExam(student) {
  const schema = {
    type_id: Joi.string().min(1).max(1).required(),
    name: Joi.string().min(1).max(1).required(),
  };
  return Joi.validate(student, schema);
}

async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM exams`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}

async function findExam(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM exams WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}

async function saveExam(newExam) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO exams VALUES(default,?,?, NOW(), NOW())`,
      [
        newExam.type_id,
        newExam.name,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM exams WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM exams WHERE id = ?;`, [insertedId], (err, result) => {
              if (err) reject(err);
              if (result.length > 0) {
                resolve(result[0]);
              } else { }
            });
          }
          else resolve(null);
        })
      });
  })
}

async function updateExam(id, updatedExam) {
  return new Promise((resolve, reject) => {
    db.execute(`Update exams SET type_id=?, name=? WHERE id=?;`,
      [
        updatedExam.type_id,
        updatedExam.name,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM exams WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}

async function deleteExam(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM exams WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  });
}

exports.validate = validateExam;
exports.findAll = findAll;
exports.findExam = findExam;
exports.saveExam = saveExam;
exports.updateExam = updateExam;
exports.deleteExam = deleteExam;