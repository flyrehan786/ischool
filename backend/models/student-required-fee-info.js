const Joi = require('joi');
const db = require('../services/mysql').db;

function validateStudent(studentRequiredFee) {
    const schema = {
        student_id: Joi.string().min(1).max(45).required(),
        required_fee_amount: Joi.string().min(1).max(45).required(),
    };
    return Joi.validate(studentRequiredFee, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute(('SELECT * FROM student_required_fee_info'), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function findStudentRequiredFeeInfo(id) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT * FROM student_required_fee_info WHERE id=?', [id], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result[0]);
            else resolve(null);
        });
    })
}

async function findStudentRequiredFeeInfoByStudentId(id) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT * FROM student_required_fee_info WHERE student_id=?', [id], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve(null);
        });
    })
}

async function saveStudentRequiredFeeInfo(newStudent) {
    return new Promise((resolve, reject) => {
        // de-activate all previous.
        db.execute('Update student_required_fee_info SET status=0 WHERE student_id=?;',
            [
                newStudent.student_id
            ], (err, result) => {
                if (err) reject(err);
                db.execute('INSERT INTO student_required_fee_info VALUES(default,?,?,1, NOW(), NOW(), 1, 1)',
                    [
                        newStudent.student_id,
                        newStudent.required_fee_amount,
                    ], (err, result) => {
                        if (err) reject(err);
                        db.execute('SELECT id FROM student_required_fee_info WHERE id = LAST_INSERT_ID();', (err, result) => {
                            if (err) reject(err);
                            if (result.length > 0) {
                                const insertedId = result[0].id;
                                db.execute(`SELECT * FROM student_required_fee_info WHERE id = ?;`, [insertedId], (err, result) => {
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
    })
}

async function updateStudentRequiredFeeInfo(id, updatedStudent) {
    return new Promise((resolve, reject) => {
        db.execute('Update student_required_fee_info SET student_id=?, required_fee_amount=? WHERE id=?;',
            [
                updatedStudent.student_id,
                updatedStudent.required_fee_amount,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM student_required_fee_info WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deleteStudentRequiredFeeInfo(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM student_required_fee_info WHERE id = ${id};`, (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    });
}

exports.validate = validateStudent;
exports.findAll = findAll;
exports.findStudentRequiredFeeInfo = findStudentRequiredFeeInfo;
exports.findStudentRequiredFeeInfoByStudentId = findStudentRequiredFeeInfoByStudentId;
exports.saveStudentRequiredFeeInfo = saveStudentRequiredFeeInfo;
exports.updateStudentRequiredFeeInfo = updateStudentRequiredFeeInfo;
exports.deleteStudentRequiredFeeInfo = deleteStudentRequiredFeeInfo;