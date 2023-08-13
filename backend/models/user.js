// const jwt = require("jsonwebtoken");
const Joi = require("joi");
const db = require('../services/mysql').db;
const bcrypt = require("bcrypt");

async function findUser(username) {
  return new Promise((resolve, reject) => {
    db.execute(`SELECT * FROM users WHERE username=?`, [username], (err, result) => {
      if (err) reject(err);
      if (result.length > 0) resolve(result);
      else resolve(null);
    });
  })
}
async function saveUser(newUser) {
  console.log(newUser);
}
async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
}
function validateUser(user) {
  const schema = {
    first_name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    last_name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    username: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    is_admin: Joi.string()
      .min(1)
      .max(1)
      .required()
  };

  return Joi.validate(user, schema);
}
exports.validate = validateUser;
exports.findUser = findUser;
exports.encryptedPassword = encryptPassword;
exports.saveUser = saveUser;
