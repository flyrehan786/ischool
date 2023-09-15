const { 
  validate, 
  findAll, 
  findStudent, 
  saveStudent, 
  updateStudent, 
  deleteStudent,
  deActivateStudent,
  activateStudent
} = require("../models/students");
const {
  validateStudentEnrollment,
  saveStudentEnrollment,
  updateStudentEnrollment,
  activateStudentEnrollment,
  deActivateStudentEnrollment,
  findAllEnrollments
} = require('../models/student-enrollments')
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const students = await findAll();
  students.forEach(s => {
    if (s.gender == 1) s.gender = 'Male';
    else if (s.gender == 0) s.gender = 'Female';

    if (s.status == 1) s.status = 'Active';
    else if (s.status == 0) s.status = 'Not Active';

    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(students);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdStudent = await saveStudent(req.body);
  res.send(createdStudent);
});

// Crud Section.
router.put("/disable/:id", async (req, res) => {
  const rowsAffected = await deActivateStudent(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The student with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.put("/activate/:id", async (req, res) => {
  const rowsAffected = await activateStudent(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The student with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedStudent = await updateStudent(
    req.params.id,
    req.body
  );

  if (!updatedStudent)
    return res
      .status(404)
      .send("The student with the given ID was not found.");
  res.send(updatedStudent);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteStudent(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The student with the given ID was not found.");
  }
  
  res.send({ deleted: true });
});

router.get("/enrollments", async (req, res) => {
  const studentsEnrollments = await findAllEnrollments();
  studentsEnrollments.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })

  // All Grades.
  const grades = await findAllGrades();
  grades.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })

  // All Students.
  const students = await findAll();
  students.forEach(s => {
    if (s.gender == 1) s.gender = 'Male';
    else if (s.gender == 0) s.gender = 'Female';

    if (s.status == 1) s.status = 'Active';
    else if (s.status == 0) s.status = 'Not Active';

    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })

  
  // Tranform data.
  // get actual grade by gradeId.
  // get actual student by studentId.
  res.send(studentsEnrollments);
});

router.get("/:id", async (req, res) => {
  const student = await findStudent(req.params.id);
  if (!student)
    return res
      .status(404)
      .send("+The student with the given ID was not found.");

  if (student.gender == 1) student.gender = 'Male';
  else if (student.gender == 0) student.gender = 'Female';

  if (student.status == 1) student.status = 'Active';
  else if (student.status == 0) student.status = 'Not Active';

  student.created_at = new Date(student.created_at).toLocaleString();
  student.updated_at = new Date(student.updated_at).toLocaleString();
  res.send(student);
});

// Enrollments Section.


router.post("/enroll", async (req, res) => {
  console.log('---');
  const { error } = validateStudentEnrollment(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdStudent = await saveStudentEnrollment(req.body);
  res.send(createdStudent);
});

router.put("/enroll/:id", async (req, res) => {
  console.log('adadd')
  const { error } = validateStudentEnrollment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedStudent = await updateStudentEnrollment(
    req.params.id,
    req.body
  );

  if (!updatedStudent)
    return res
      .status(404)
      .send("The student-enrollment with the given ID was not found.");
  res.send(updatedStudent);
});

router.put("/enroll/disable/:id", async (req, res) => {
  const rowsAffected = await deActivateStudentEnrollment(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The student-enrollment with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.put("/enroll/activate/:id", async (req, res) => {
  const rowsAffected = await activateStudentEnrollment(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The student-enrollment with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

// Certification Section.
// Fee Section.

module.exports = router;
