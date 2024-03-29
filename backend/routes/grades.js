const gradeModel = require("../models/grade");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const grades = await gradeModel.findAllGrades();
  grades.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(grades);
});

router.post("/", async (req, res) => {
  const { error } = gradeModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdGrade = await gradeModel.saveGrade(req.body);
  res.send(createdGrade);
});

router.put("/:id", async (req, res) => {
  const { error } = studentModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedGrade = await gradeModel.updateGrade(
    req.params.id,
    req.body
  );

  if (!updatedGrade)
    return res
      .status(404)
      .send("The grade with the given ID was not found.");
  res.send(updatedGrade);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await gradeModel.deleteGrade(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The grade with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const grade = await gradeModel.findGrade(req.params.id);
  if (!grade)
    return res
      .status(404)
      .send("The grade with the given ID was not found.");

  grade.created_at = new Date(grade.created_at).toLocaleString();
  grade.updated_at = new Date(grade.updated_at).toLocaleString();
  res.send(grade);
});

module.exports = router;
