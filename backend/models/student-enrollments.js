const Joi = require('joi');
const db = require('../services/mysql').db;

function validateStudentEnrollment(student) {
    const schema = {
        student_id: Joi.string().min(1).max(45).required(),
        grade_id: Joi.string().min(1).max(45).required(),
    };
    return Joi.validate(student, schema);
}

async function findAllEnrollments() {
    return new Promise((resolve, reject) => {
        db.execute(('SELECT * FROM student_enrollments'), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function findStudentEnrollments(id) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT * FROM student_enrollments WHERE id=?', [id], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result[0]);
            else resolve(null);
        });
    })
}

async function findStudentEnrollmentsAgainstStudentId(studentId) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT * FROM student_enrollments WHERE student_id=?', [studentId], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve(null);
        });
    })
}

async function saveStudentEnrollment(newStudentEnrollment) {
    return new Promise((resolve, reject) => {
        // blocked recent enrollments.
        db.execute('Update student_enrollments SET status=0 WHERE student_id=?',
        [
            newStudentEnrollment.student_id,
        ], (err, result) => {
            if (result.affectedRows >= 0) {
                    // insert new active enrollment.
                    db.execute('INSERT INTO student_enrollments VALUES(default,?,?,1, NOW(), NOW(), 1, 1)',
                    [
                        newStudentEnrollment.student_id,
                        newStudentEnrollment.grade_id,
                    ], (err, result) => {
                        if (err) reject(err);
                        db.execute('SELECT id FROM student_enrollments WHERE id = LAST_INSERT_ID();', (err, result) => {
                            if (err) reject(err);
                            if (result.length > 0) {
                                const insertedId = result[0].id;
                                    // return the updated student enrollment.
                                    db.execute(`SELECT * FROM student_enrollments WHERE id = ?;`, [insertedId], (err, result) => {
                                        if (err) reject(err);
                                        if (result.length > 0) {
                                            resolve(result[0]);
                                        } else { }
                                    });
                                }
                                else resolve(null);
                            })
                    });
                }
            });
    })
}

async function updateStudentEnrollment(id, updatedStudentEnrollment) {
    return new Promise((resolve, reject) => {
        db.execute('Update student_enrollments SET grade_id=?, grade_id=? WHERE id=?;',
            [
                updatedStudentEnrollment.grade_id,
                id
            ], (err, result) => {
                if (err) reject(err);
                db.execute(`SELECT * FROM student_enrollments WHERE id = ${id};`, (err, result) => {
                    if (err) reject(err);
                    if (result.length > 0) resolve(result[0]);
                    else resolve(null);
                })
            })
    })
}

async function deleteStudentEnrollment(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM student_enrollments WHERE id = ${id};`, (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    });
}

async function deActivateStudentEnrollment(id) {
    return new Promise((resolve, reject) => {
        db.execute('UPDATE student_enrollments SET status=? WHERE id=?', [0, id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    })
}

async function activateStudentEnrollment(id, studentId) {
    return new Promise((resolve, reject) => {
        // disable all enrollments first.
        db.execute('UPDATE student_enrollments SET status=0 WHERE student_id=?', [studentId], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows >= 0) {
                // then activate specific enrollment.
                db.execute('UPDATE student_enrollments SET status=? WHERE id=? AND student_id=?', [1, id, studentId], (err, result) => {
                    if (err) reject(err);
                    if (result.affectedRows >= 0) resolve(true);
                    else resolve(false);
                })
            }
            else resolve(false);
        })
    })
}

exports.validateStudentEnrollment = validateStudentEnrollment;
exports.findAllEnrollments = findAllEnrollments;
exports.findStudentEnrollments = findStudentEnrollments;
exports.findStudentEnrollmentsAgainstStudentId = findStudentEnrollmentsAgainstStudentId;
exports.saveStudentEnrollment = saveStudentEnrollment;
exports.updateStudentEnrollment = updateStudentEnrollment;
exports.deleteStudentEnrollment = deleteStudentEnrollment;
exports.deActivateStudentEnrollment = deActivateStudentEnrollment;
exports.activateStudentEnrollment = activateStudentEnrollment;