const { 
  validate, 
  findAll, 
  findTeacher,
  deleteTeacher,
  updateTeacher,
  activateTeacher,
  deActivateTeacher,
  saveTeacher} = require("../models/teachers");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const teachers = await findAll();
  teachers.forEach(s => {
    s.joining_date = new Date(s.joining_date).toLocaleString();
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(teachers);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdTeacher = await saveTeacher(req.body);
  res.send(createdTeacher);
});

router.put("/disable/:id", async (req, res) => {
  const rowsAffected = await deActivateTeacher(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The teacher with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.put("/activate/:id", async (req, res) => {
  const rowsAffected = await activateTeacher(
    req.params.id,
    req.body
  );

  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The teacher with the given ID was not found.");
  }
  
  res.send({ updated: true });
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedTeacher = await updateTeacher(
    req.params.id,
    req.body
  );

  if (!updatedTeacher)
    return res
      .status(404)
      .send("The teacher with the given ID was not found.");
  res.send(updatedTeacher);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteTeacher(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The teacher with the given ID was not found.");
  }
  
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const teacher = await findTeacher(req.params.id);
  if (!teacher)
    return res
      .status(404)
      .send("The teacher with the given ID was not found.");

  teacher.created_at = new Date(teacher.created_at).toLocaleString();
  teacher.updated_at = new Date(teacher.updated_at).toLocaleString();
  res.send(teacher);
});

module.exports = router;
