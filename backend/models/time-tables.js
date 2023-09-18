const Joi = require('joi');
const db = require('../services/mysql').db;
function validateTimeTable(subject) {
  const schema = {
    day_name: Joi.string().min(3).max(45).required(),
    grade_id: Joi.string().min(1).max(45).required(),
    time_7AM_8AM: Joi.string().min(3).max(45).required(),
    time_8AM_9AM: Joi.string().min(3).max(45).required(),
    time_9AM_10AM: Joi.string().min(3).max(45).required(),
    time_10AM_11AM: Joi.string().min(3).max(45).required(),
    time_11AM_12PM: Joi.string().min(3).max(45).required(),
    time_12PM_1PM: Joi.string().min(3).max(45).required(),
    time_1PM_2PM: Joi.string().min(3).max(45).required(),
  };
  return Joi.validate(subject, schema);
}

async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM time_table`), [], (err, result) => {
      if (err) reject(err);
      if (result && result.length > 0) resolve(result);
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
    db.execute(`INSERT INTO time_table VALUES(default,?,?,?,?,?,?,?,?,?, NOW(), NOW())`,
      [
        newTimeTable.day_name,
        newTimeTable.grade_id,
        newTimeTable.time_7AM_8AM,
        newTimeTable.time_8AM_9AM,
        newTimeTable.time_9AM_10AM,
        newTimeTable.time_10AM_11AM,
        newTimeTable.time_11AM_12PM,
        newTimeTable.time_12PM_1PM,
        newTimeTable.time_1PM_2PM,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM time_table WHERE id = LAST_INSERT_ID();`, (err, result) => {
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

async function updateTimeTable(id, updatedSubject) {
  return new Promise((resolve, reject) => {
    db.execute(`Update time_table SET day_name=?, grade_id=?, time_7AM_8AM=?, time_8AM_9AM=?, time_9AM_10AM=?, time_10AM_11AM=?, time_11AM_12PM=?, time_12PM_1PM=?, time_1PM_2PM=?  WHERE id=?;`,
      [
        updatedSubject.day_name,
        updatedSubject.grade_id,
        updatedSubject.time_7AM_8AM,
        updatedSubject.time_8AM_9AM,
        updatedSubject.time_9AM_10AM,
        updatedSubject.time_10AM_11AM,
        updatedSubject.time_11AM_12PM,
        updatedSubject.time_12PM_1PM,
        updatedSubject.time_1PM_2PM,
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
    db.execute(`DELETE FROM time_table WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  });
}

exports.validate = validateTimeTable;
exports.findAll = findAll;
exports.findTimeTable = findTimeTable;
exports.saveTimeTable = saveTimeTable;
exports.updateTimeTable = updateTimeTable;
exports.deleteTimeTable = deleteTimeTable;