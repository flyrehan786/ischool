const jwt = require("jsonwebtoken");
const Joi = require("joi");
const db = require('../services/mysql').db;
const bcrypt = require("bcrypt");
const config = require('../config/default.json');

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
  return new Promise((resolve, reject) => {
    db.execute(`INSERT INTO users VALUES(default, ?, ?, ?, ?, ?, ?, NOW(), NOW(), 1, 1)`, [ newUser.first_name, newUser.last_name, newUser.email, newUser.username, newUser.password, newUser.is_admin ], (err, result) => {
      if (err) reject(err);
      db.execute(`SELECT id FROM users WHERE id = LAST_INSERT_ID();`, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) resolve(result[0].id);
        else resolve(null);
      })
    });
  })
}

function generateAuthToken(newUser) {
  const token = jwt.sign(
    {
      id: newUser.id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      username: newUser.username,
      isAdmin: newUser.is_admin
    },
    config.jwtPrivateKey, {
      expiresIn: 3000
    }
  );
  return token;
};

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

exports.generateAuthToken = generateAuthToken;
exports.validate = validateUser;
exports.findUser = findUser;
exports.encryptedPassword = encryptPassword;
exports.saveUser = saveUser;
