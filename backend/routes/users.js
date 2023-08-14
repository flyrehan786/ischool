// const auth = require("../middleware/auth");
// const _ = require("lodash");
const { validate, findUser, encryptedPassword, saveUser, findAll   } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  const users = await findAll();
  const listWithoutPassword = users.map(obj => {
    const { password, created_by, updated_by, ...rest } = obj; 
    return rest; 
  });
  const keys = Object.keys(listWithoutPassword[0]);
  listWithoutPassword.filter(x => {
    x.created_at = new Date(x.created_at).toLocaleString();
    x.updated_at = new Date(x.updated_at).toLocaleString();
  })
  res.send({
    rows: listWithoutPassword,
    headers: keys,
    filters: [keys[1], keys[2]]
  });
});

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const queryResult = await findUser(req.body.username);
  if (queryResult) return res.status(400).send("User already registered.");
  const encryptPassword = await encryptedPassword(req.body.username);
  
  const newUser = {
    id: null,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: encryptPassword,
    is_admin: req.body.is_admin
  };

  const insertedId = await saveUser(newUser);
  newUser.id = insertedId;
  res
    .send({
      id: newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      username: newUser.username,
      is_admin: newUser.is_admin
    });
});

module.exports = router;
