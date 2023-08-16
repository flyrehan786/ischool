const Joi = require('joi');
const db = require('../services/mysql').db;

function validateTimeTable(timeTable) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(timeTable, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM timeTables`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findTimeTable(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM time_tables WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveTimeTable(newTimeTable) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO time_tables VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newTimeTable.first_name, newTimeTable.last_name, newTimeTable.email, newTimeTable.username, newTimeTable.password, newTimeTable.is_admin, newTimeTable.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM time_tables WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}
async function updateTimeTable(id, updatedTimeTable) {}
async function deleteTimeTable(id) {}
async function deActivateTimeTable(id) {}

exports.validate = validateTimeTable;
exports.findAll = findAll;
exports.findTimeTable = findTimeTable;
exports.saveTimeTable = saveTimeTable; 
exports.updateTimeTable = updateTimeTable;
exports.deleteTimeTable = deleteTimeTable;
exports.deActivateTimeTable = deActivateTimeTable;