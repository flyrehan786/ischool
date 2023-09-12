const Joi = require('joi');
const db = require('../services/mysql').db;

function validateStudent(student) {
    const schema = {
        student_id: Joi.string().min(1).max(45).required(),
        required_amount: Joi.string().min(1).max(45).required(),
        paid_amount: Joi.string().min(1).max(45).required(),
        payment_date: Joi.string().min(1).max(45).required(),
    };
    return Joi.validate(student, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute(('SELECT * FROM student_fee_payments'), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function findStudent(id) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT * FROM student_fee_payments WHERE id=?', [id], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result[0]);
            else resolve(null);
        });
    })
}

async function saveStudent(newStudent) {
    return new Promise((resolve, reject) => {
        db.execute('INSERT INTO student_fee_payments VALUES(default,?,?,?,?, NOW(), NOW(), 1, 1)',
            [
                newStudent.student_id,
                newStudent.required_amount,
                newStudent.paid_amount,
                newStudent.payment_date,
            ], (err, result) => {
                if (err) reject(err);
                db.execute('SELECT id FROM student_fee_payments WHERE id = LAST_INSERT_ID();', (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) {
                        const insertedId = result[0].id;
                        db.execute(`SELECT * FROM student_fee_payments WHERE id = ?;`, [insertedId], (err, result) => {
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

async function updateStudent(id, updatedStudent) {
    return new Promise((resolve, reject) => {
        db.execute('Update student_fee_payments SET student_id=?, required_amount=?, paid_amount=?, payment_date=? WHERE id=?;',
            [
                updatedStudent.student_id,
                updatedStudent.required_amount,
                updatedStudent.paid_amount,
                updatedStudent.payment_date,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM student_fee_payments WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deleteStudent(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM student_fee_payments WHERE id = ${id};`, (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    });
}

exports.validate = validateStudent;
exports.findAll = findAll;
exports.findStudent = findStudent;
exports.saveStudent = saveStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;