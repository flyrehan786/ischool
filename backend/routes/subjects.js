const { 
  validate, 
  findAll, 
  findSubject, 
  saveSubject, 
  updateSubject, 
  deleteSubject,
} = require("../models/subjects");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const subjects = await findAll();
  subjects.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(subjects);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdSubject = await saveSubject(req.body);
  res.send(createdSubject);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedSubject = await updateSubject(
    req.params.id,
    req.body
  );

  if (!updatedSubject)
    return res
      .status(404)
      .send("The subject with the given ID was not found.");
  res.send(updatedSubject);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteSubject(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The subject with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const subject = await findSubject(req.params.id);
  if (!subject)
    return res
      .status(404)
      .send("The subject with the given ID was not found.");

  subject.created_at = new Date(subject.created_at).toLocaleString();
  subject.updated_at = new Date(subject.updated_at).toLocaleString();
  res.send(subject);
});

module.exports = router;
