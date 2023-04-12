const { Student, validate } = require("../models/students");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const students = await Student.find()
    .select("-__v")
    .sort("name");
  res.send(students);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let student = new Student({
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone
  });
  student = await student.save();

  res.send(student);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone
    },
    { new: true }
  );

  if (!student)
    return res
      .status(404)
      .send("The student with the given ID was not found.");

  res.send(student);
});

router.delete("/:id", auth, async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);

  if (!student)
    return res
      .status(404)
      .send("The student with the given ID was not found.");

  res.send(student);
});

router.get("/:id", auth, async (req, res) => {
  const student = await Student.findById(req.params.id).select("-__v");

  if (!student)
    return res
      .status(404)
      .send("The student with the given ID was not found.");

  res.send(student);
});

module.exports = router;
