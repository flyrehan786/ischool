const { Student, validate, findAll, findStudent, deleteStudent, updateStudent, saveStudent } = require("../models/students");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const students = await findAll();
  students.forEach(s => {
    if (s.gender == 1) s.gender = 'Male';
    else if (s.gender == 0) s.gender = 'Female';

    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(students);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const student = await saveStudent(req.body);
  console.log(student);
  res.send(student);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const student = await updateStudent(
    req.params.id,
    req.body
  );

  if (!student)
    return res
      .status(404)
      .send("The student with the given ID was not found.");
  res.send(student);
});

router.delete("/:id", async (req, res) => {
  const student = await this.deleteStudent(req.params.id);

  if (!student)
    return res
      .status(404)
      .send("The student with the given ID was not found.");

  res.send(student);
});

router.get("/:id", async (req, res) => {
  const student = await findStudent(req.params.id);
  if (!student)
    return res
      .status(404)
      .send("The student with the given ID was not found.");

  if (student.gender == 1) student.gender = 'Male';
  else if (student.gender == 0) student.gender = 'Female';

  student.created_at = new Date(student.created_at).toLocaleString();
  student.updated_at = new Date(student.updated_at).toLocaleString();
  res.send(student);
});

module.exports = router;
