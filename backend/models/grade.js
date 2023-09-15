const Joi = require('joi');
const db = require('../services/mysql').db;

function validateGrade(grade) {
  const schema = {
    name: Joi.string().min(3).max(45).required(),
  };
  return Joi.validate(grade, schema);
}

async function findAllGrades() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM grades`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}

async function findGrade(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM grades WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}

async function saveGrade(newGrade) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO grades VALUES(default,?, NOW(), NOW())`,
      [
        newGrade.name,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM grades WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM grades WHERE id = ?;`, [insertedId], (err, result) => {
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

async function updateGrade(id, updatedGrade) {
  return new Promise((resolve, reject) => {
    db.execute(`Update grades SET name=? WHERE id=?;`,
      [
        updatedGrade.name,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM grades WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}

async function deleteGrade(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM grades WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  });
}

exports.validate = validateGrade;
exports.findAllGrades = findAllGrades;
exports.findGrade = findGrade;
exports.saveGrade = saveGrade;
exports.updateGrade = updateGrade;
exports.deleteGrade = deleteGrade;