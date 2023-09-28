const examModel = require("../models/exams");
const examTypesModel = require('../models/exam-types');
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const exams = await examModel.findAll();
  const examTypes = await examTypesModel.findAll();
  exams.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  });

  exams.forEach(e => {
    const type = examTypes.find(t => e.exam_type_id == t.id);
    if (type) e.type = type['name'];
  });
  res.send(exams);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdExam = await examModel.saveExam(req.body);
  res.send(createdExam);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);
  const updatedExam = await examModel.updateExam(
    req.params.id,
    req.body
  );

  if (!updatedExam)
    return res
      .status(404)
      .send("The exam with the given ID was not found.");
  res.send(updatedExam);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await examModel.deleteExam(req.params.id);
  if (rowsAffected == false) {
    return res
      .status(404)
      .send("The exam with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const exam = await examModel.findExam(req.params.id);
  if (!exam)
    return res
      .status(404)
      .send("The exam with the given ID was not found.");

  exam.created_at = new Date(exam.created_at).toLocaleString();
  exam.updated_at = new Date(exam.updated_at).toLocaleString();

  const examTypes = await examTypesModel.findAll();
  const type = examTypes.find(t => exam.exam_type_id == t.id);
  if (type) exam.type = type['name'];


  res.send(exam);
});

module.exports = router;
