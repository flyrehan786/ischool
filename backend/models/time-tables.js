const Joi = require('joi');
const db = require('../services/mysql').db;

function validateSubject(subject) {
  const schema = {
    day_name: Joi.string().min(3).max(45).required(),
    time_7AM_8AM: Joi.string().min(3).max(45).required(),
    time_8AM_9AM: Joi.string().min(3).max(45).required(),
    time_9AM_10AM: Joi.string().min(3).max(45).required(),
    time_10AM_11AM: Joi.string().min(3).max(45).required(),
    time_12AM_1PM: Joi.string().min(3).max(45).required(),
    time_1PM_2PM: Joi.string().min(3).max(45).required(),
  };
  return Joi.validate(subject, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM time_table`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findTimeTable(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM time_table WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveTimeTable(newTimeTable) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO time_table VALUES(default,?, NOW(), NOW())`,
      [
        newTimeTable.name,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM time_table WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM subjects WHERE id = ?;`,[insertedId], (err, result) => {
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
async function updateTimeTable(id, updatedSubject) {
  return new Promise((resolve, reject) => {
    db.execute(`Update time_table SET name=? WHERE id=?;`,
      [
        updatedSubject.name,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM time_table WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}
async function deleteTimeTable(id) {
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
exports.findTimeTable = findTimeTable;
exports.saveTimeTable = saveTimeTable;
exports.updateTimeTable = updateTimeTable;
exports.deleteTimeTable = deleteTimeTable;