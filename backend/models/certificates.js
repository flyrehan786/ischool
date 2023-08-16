const Joi = require('joi');
const db = require('../services/mysql').db;

function validateCertificate(certificate) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(certificate, schema);
}
async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM certificates`), [], (err, result) => {
      if(err) reject(err);
      if(result.length > 0) resolve(result);
      else resolve([]);
    })
  })
}
async function findCertificate(id) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM certificates WHERE id=?`, [id], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result[0]);
      else resolve(null);
    });
  })
}
async function saveCertificate(newCertificate) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO certificates VALUES(default, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newCertificate.first_name, newCertificate.last_name, newCertificate.email, newCertificate.username, newCertificate.password, newCertificate.is_admin, newCertificate.status ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM certificates WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}
async function updateCertificate(id, updatedCertificate) {}
async function deleteCertificate(id) {}
async function deActivateCertificate(id) {}

exports.validate = validateCertificate;
exports.findAll = findAll;
exports.findCertificate = findCertificate;
exports.saveCertificate = saveCertificate; 
exports.updateCertificate = updateCertificate;
exports.deleteCertificate = deleteCertificate;
exports.deActivateCertificate = deActivateCertificate;