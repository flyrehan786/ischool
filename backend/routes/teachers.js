const { Teacher, validate } = require("../models/teachers");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const teachers = await Teacher.find()
    .select("-__v")
    .sort("name");
  res.send(teachers);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let teacher = new Teacher({
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone
  });
  teacher = await teacher.save();

  res.send(teacher);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const teacher = await Teacher.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone
    },
    { new: true }
  );

  if (!teacher)
    return res
      .status(404)
      .send("The teacher with the given ID was not found.");

  res.send(teacher);
});

router.delete("/:id", auth, async (req, res) => {
  const teacher = await Teacher.findByIdAndRemove(req.params.id);

  if (!teacher)
    return res
      .status(404)
      .send("The student with the given ID was not found.");

  res.send(teacher);
});

router.get("/:id", auth, async (req, res) => {
  const teacher = await Teacher.findById(req.params.id).select("-__v");

  if (!teacher)
    return res
      .status(404)
      .send("The teacher with the given ID was not found.");

  res.send(teacher);
});

module.exports = router;
