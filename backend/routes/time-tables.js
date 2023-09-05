const { 
  validate, 
  findAll, 
  findTimeTable, 
  saveTimeTable, 
  updateTimeTable, 
  deleteTimeTable,
} = require("../models/time-tables");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const timeTables = await findAll();
  res.send(timeTables);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdTimeTable = await saveTimeTable(req.body);
  res.send(createdTimeTable);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedTimeTable = await updateTimeTable(
    req.params.id,
    req.body
  );

  if (!updatedTimeTable)
    return res
      .status(404)
      .send("The time-table with the given ID was not found.");
  res.send(updatedTimeTable);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteTimeTable(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The time-table with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const timeTable = await findTimeTable(req.params.id);
  if (!timeTable)
    return res
      .status(404)
      .send("The time-table with the given ID was not found.");
  res.send(timeTable);
});

module.exports = router;
