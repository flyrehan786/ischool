const { 
  validate, 
  findAll, 
  findExamType, 
  saveExamType, 
  updateExamType, 
  deleteExamType,
} = require("../models/exam-types");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const examTypes = await findAll();
  examTypes.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(examTypes);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdExamType = await saveExamType(req.body);
  res.send(createdExamType);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedExamType = await updateExamType(
    req.params.id,
    req.body
  );

  if (!updatedExamType)
    return res
      .status(404)
      .send("The exam with the given ID was not found.");
  res.send(updatedExamType);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteExamType(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The exam-type with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const examType = await findExamType(req.params.id);
  if (!examType)
    return res
      .status(404)
      .send("The exam-type with the given ID was not found.");

  examType.created_at = new Date(examType.created_at).toLocaleString();
  examType.updated_at = new Date(examType.updated_at).toLocaleString();
  res.send(examType);
});

module.exports = router;
