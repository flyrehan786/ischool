const studentModel = require("../models/students");
const studentEnrollmentModel = require('../models/student-enrollments');
const studentRequiredFeeModel = require('../models/student-required-fee-info')
const gradeModel = require("../models/grade");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const students = await studentModel.findAll();
  for (let student = 0; student < students.length; student++) {
    const s = students[student];
    const studentEnrollments = await studentEnrollmentModel.findStudentEnrollmentsAgainstStudentId(s.id);
    if (studentEnrollments) {
      const activeEnrollment = studentEnrollments.filter(x => x.status == 1);
      if (activeEnrollment && activeEnrollment.length > 0) {
        const gradeInfo = await gradeModel.findGrade(activeEnrollment[0]['grade_id']);
        s.active_enrollment_grade_id = activeEnrollment[0]['grade_id'];
        s.active_enrollment_grade_name = gradeInfo['name'];
        s.active_enrollment_grade_status = (activeEnrollment[0]['status'] == 1) ? 'Active' : 'Not Active';
      } else {
        s.active_enrollment_grade_id = '-';
        s.active_enrollment_grade_name = '-';
        s.active_enrollment_grade_status = 'Not Active';
      }
    } else {
      s.active_enrollment_grade_id = '-';
      s.active_enrollment_grade_name = '-';
      s.active_enrollment_grade_status = 'Not Active';
    }
    if (s.gender == 1) s.gender = 'Male';
    else if (s.gender == 0) s.gender = 'Female';

    if (s.status == 1) s.status = 'Active';
    else if (s.status == 0) s.status = 'Not Active';

    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();

  }

  students.forEach(async s => {
  })
  res.send(students);
});

router.post("/", async (req, res) => {
  const { error } = studentModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdStudent = await studentModel.saveStudent(req.body);
  res.send(createdStudent);
});

// Crud Section.
router.put("/disable/:id", async (req, res) => {
  const rowsAffected = await studentModel.deActivateStudent(
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
  const rowsAffected = await studentModel.activateStudent(
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
  const { error } = studentModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedStudent = await studentModel.updateStudent(
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
  const rowsAffected = await studentModel.deleteStudent(req.params.id);
  if (rowsAffected == false) {
    return res
      .status(404)
      .send("The student with the given ID was not found.");
  }

  res.send({ deleted: true });
});

router.put("/enroll/activate/:id", async (req, res) => {
  const rowsAffected = await studentEnrollmentModel.activateStudentEnrollment(
    req.params.id,
    req.body.student_id
  );

  if (rowsAffected == false) {
    return res
      .status(404)
      .send("The student-enrollment with the given ID was not found.");
  }

  res.send({ updated: true });
});

router.get("/enrollments", async (req, res) => {
  const studentsEnrollments = await studentEnrollmentModel.findAllEnrollments();

  for (let i = 0; i < studentsEnrollments.length; i++) {
    const s = studentsEnrollments[i];
    s.student = await studentModel.findStudent(s.student_id);
    s.student_name = s.student.first_name + ' ' + s.student.last_name;
    s.student_father_name = s.student.father_name;
    s.student_cnic = s.student.cnic;

    s.grade = await gradeModel.findGrade(s.grade_id);
    s.grade_name = s.grade.name;
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();

    if (+s.status == 0) s.status = 'Not Active';
    if (+s.status == 1) s.status = 'Active';
  }

  res.send(studentsEnrollments);
});

router.get("/enrollments/:id", async (req, res) => {
  const studentEnrollment = await studentEnrollmentModel.findStudentEnrollments(req.params.id);

  const s = studentEnrollment;
  s.student = await studentModel.findStudent(s.student_id);
  s.student_name = s.student.first_name + ' ' + s.student.last_name;
  s.student_father_name = s.student.father_name;
  s.student_cnic = s.student.cnic;

  s.grade = await gradeModel.findGrade(s.grade_id);
  s.grade_name = s.grade.name;
  s.created_at = new Date(s.created_at).toLocaleString();
  s.updated_at = new Date(s.updated_at).toLocaleString();

  if (+s.status == 0) s.status = 'Not Active';
  if (+s.status == 1) s.status = 'Active';

  res.send(s);
});

router.get("/enrollments/student/:studentId", async (req, res) => {
  let studentsEnrollments = await studentEnrollmentModel.findStudentEnrollmentsAgainstStudentId(req.params.studentId);
  if(studentsEnrollments) {
    for (let i = 0; i < studentsEnrollments.length; i++) {
      const s = studentsEnrollments[i];
      s.student = await studentModel.findStudent(s.student_id);
      s.student_name = s.student.first_name + ' ' + s.student.last_name;
      s.student_father_name = s.student.father_name;
      s.student_cnic = s.student.cnic;
  
      s.grade = await gradeModel.findGrade(s.grade_id);
      s.grade_name = s.grade.name;
      s.created_at = new Date(s.created_at).toLocaleString();
      s.updated_at = new Date(s.updated_at).toLocaleString();
  
      if (+s.status == 0) s.status = 'Not Active';
      if (+s.status == 1) s.status = 'Active';
    }
  } else studentsEnrollments = []

  res.send(studentsEnrollments);
});

router.delete("/enrollments/:id", async (req, res) => {
  const rowsAffected = await studentEnrollmentModel.deleteStudentEnrollment(req.params.id);
  if (rowsAffected == false) {
    return res
      .status(404)
      .send("The enrollment with the given ID was not found.");
  }

  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const student = await studentModel.findStudent(req.params.id);
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

router.post("/enroll", async (req, res) => {
  const { error } = studentEnrollmentModel.validateStudentEnrollment(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdStudent = await studentEnrollmentModel.saveStudentEnrollment(req.body);
  res.send(createdStudent);
});

router.put("/enroll/:id", async (req, res) => {
  console.log('adadd')
  const { error } = validateStudentEnrollment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedStudent = await studentEnrollmentModel.updateStudentEnrollment(
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
  const rowsAffected = await studentEnrollmentModel.deActivateStudentEnrollment(
    req.params.id,
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
router.post("/required/fee/info", async (req, res) => {
  const { error } = studentRequiredFeeModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const created = await studentRequiredFeeModel.saveStudentRequiredFeeInfo(req.body);
  res.send(created);
})

module.exports = router;
