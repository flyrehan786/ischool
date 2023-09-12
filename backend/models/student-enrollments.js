const Joi = require('joi');
const db = require('../services/mysql').db;

function validateStudent(student) {
    const schema = {
        student_id: Joi.string().min(1).max(45).required(),
        grade_id: Joi.string().min(1).max(45).required(),
        status: Joi.string().min(1).max(1).required(),
    };
    return Joi.validate(student, schema);
}

async function findAll() {
    return new Promise((resolve, reject) => {
        db.execute(('SELECT * FROM student_enrollments'), [], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result);
            else resolve([]);
        })
    })
}

async function findStudent(id) {
    return new Promise((resolve, reject) => {
        db.execute('SELECT * FROM student_enrollments WHERE id=?', [id], (err, result) => {
            if (err) reject(err);
            if (result.length > 0) resolve(result[0]);
            else resolve(null);
        });
    })
}

async function saveStudent(newStudent) {
    return new Promise((resolve, reject) => {
        // blocked recent enrollments.
        // insert new active enrollment.
        // return the updated student enrollment.
        db.execute('Update student_enrollments SET status=0 WHERE student_id=?',
            [
                newStudent.student_id,
            ], (err, result) => {
                if (result.affectedRows == 1) {
                    db.execute('INSERT INTO student_enrollments VALUES(default,?,1, NOW(), NOW(), 1, 1)',
                        [
                            newStudent.student_id,
                            newStudent.grade_id,
                        ], (err, result) => {
                            if (err) reject(err);
                            db.execute('SELECT id FROM student_enrollments WHERE id = LAST_INSERT_ID();', (err, result) => {
                                if (err) reject(err);
                                if (result.length > 0) {
                                    const insertedId = result[0].id;
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

async function updateStudent(id, updatedStudent) {
    return new Promise((resolve, reject) => {
        db.execute('Update student_enrollments SET student_id=?, grade_id=? WHERE id=?;',
            [
                updatedStudent.student_id,
                updatedStudent.grade_id,
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

async function deleteStudent(id) {
    return new Promise((resolve, reject) => {
        db.execute(`DELETE FROM student_enrollments WHERE id = ${id};`, (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    });
}

async function deActivateStudent(id) {
    return new Promise((resolve, reject) => {
        db.execute('UPDATE student_enrollments SET status=? WHERE id=?', [0, id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    })
}

async function activateStudent(id) {
    return new Promise((resolve, reject) => {
        // disable all enrollments first.
        // then activate specific enrollment.
        db.execute('UPDATE student_enrollments SET status=? WHERE id=?', [1, id], (err, result) => {
            if (err) reject(err);
            if (result.affectedRows == 1) resolve(true);
            else resolve(false);
        })
    })
}

exports.validate = validateStudent;
exports.findAll = findAll;
exports.findStudent = findStudent;
exports.saveStudent = saveStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
exports.deActivateStudent = deActivateStudent;
exports.activateStudent = activateStudent;