const Joi = require('joi');
const db = require('../services/mysql').db;

function validateSubject(subject) {
  const schema = {
    name: Joi.string().min(3).max(45).required(),
  };
  return Joi.validate(subject, schema);
}

async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM subjects`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
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
    db.execute(`INSERT INTO subjects VALUES(default,?, NOW(), NOW())`,
      [
        newSubject.name,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM subjects WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM subjects WHERE id = ?;`, [insertedId], (err, result) => {
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

async function updateSubject(id, updatedSubject) {
  return new Promise((resolve, reject) => {
    db.execute(`Update subjects SET name=? WHERE id=?;`,
      [
        updatedSubject.name,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM subjects WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}

async function deleteSubject(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM subjects WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  });
}

exports.validate = validateSubject;
exports.findAll = findAll;
exports.findSubject = findSubject;
exports.saveSubject = saveSubject;
exports.updateSubject = updateSubject;
exports.deleteSubject = deleteSubject;