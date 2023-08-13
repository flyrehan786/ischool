// const auth = require("../middleware/auth");
// const _ = require("lodash");
const { validate, findUser, encryptedPassword, saveUser } = require("../models/user");
const express = require("express");
const router = express.Router();

// router.get("", async (req, res) => {
//   // const user = await User.findById(req.user._id).select("-password");
//   // res.send(user);
//   res.send('ok')
// });

router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const queryResult = await findUser(req.body.username);
  if (queryResult) return res.status(400).send("User already registered.");
  const encryptPassword = await encryptedPassword(req.body.username);


  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: encryptPassword,
    is_admin: req.body.is_admin
  };

  saveUser(newUser);

  res.send(newUser);


  // const token = user.generateAuthToken();
  // res
  //   .header("x-auth-token", token)
  //   .send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
