const Joi = require('joi');
const db = require('../services/mysql').db;

function validateCertificate(certificate) {
  const schema = {
    name: Joi.string().min(3).max(45).required(),
    template: Joi.string().min(3).max(45).required(),
  };
  return Joi.validate(certificate, schema);
}

async function findAll() {
  return new Promise((resolve, reject) => {
    db.execute((`SELECT * FROM certificates`), [], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
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
    db.execute(`INSERT INTO certificates VALUES(default,?,?, NOW(), NOW())`,
      [
        newCertificate.name,
        newCertificate.template,
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT id FROM certificates WHERE id = LAST_INSERT_ID();`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) {
            const insertedId = result[0].id;
            db.execute(`SELECT * FROM certificates WHERE id = ?;`, [insertedId], (err, result) => {
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

async function saveIssueCertificate(newCertificate) {
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO certificates VALUES(default,?,?, NOW(), NOW())`,
      [
        newCertificate.student_id,
        newCertificate.certificate_id,
      ], (err, result) => {
        if (err) reject(err);
        if(result.affectedRows == 1) resolve(true);
        else resolve(false);
      });
  })
}

async function updateCertificate(id, updatedCertificate) {
  return new Promise((resolve, reject) => {
    db.execute(`Update certificates SET name=?, template=? WHERE id=?;`,
      [
        updatedCertificate.name,
        updatedCertificate.template,
        id
      ], (err, result) => {
        if (err) reject(err);
        db.execute(`SELECT * FROM certificates WHERE id = ${id};`, (err, result) => {
          if (err) reject(err);
          if (result.length > 0) resolve(result[0]);
          else resolve(null);
        })
      })
  })
}

async function deleteCertificate(id) {
  return new Promise((resolve, reject) => {
    db.execute(`DELETE FROM certificates WHERE id = ${id};`, (err, result) => {
      if (err) reject(err);
      if (result.affectedRows == 1) resolve(true);
      else resolve(false);
    })
  });
}

exports.validate = validateCertificate;
exports.findAll = findAll;
exports.findCertificate = findCertificate;
exports.saveCertificate = saveCertificate;
exports.saveIssueCertificate = saveIssueCertificate;
exports.updateCertificate = updateCertificate;
exports.deleteCertificate = deleteCertificate;