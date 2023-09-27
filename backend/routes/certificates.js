const { 
  validate, 
  findAll, 
  findCertificate, 
  saveCertificate, 
  updateCertificate, 
  deleteCertificate,
} = require("../models/certificates");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const certificates = await findAll();
  certificates.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(certificates);
});

router.post("/issue/new", async (req, res) => {
  console.log(req.body);
});


router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdCertificate = await saveCertificate(req.body);
  res.send(createdCertificate);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedCertificate = await updateCertificate(
    req.params.id,
    req.body
  );

  if (!updatedCertificate)
    return res
      .status(404)
      .send("The certificate with the given ID was not found.");
  res.send(updatedCertificate);
});

router.delete("/:id", async (req, res) => {
  const rowsAffected = await deleteCertificate(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The certificate with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const certificate = await findCertificate(req.params.id);
  if (!certificate)
    return res
      .status(404)
      .send("The certificate with the given ID was not found.");

  certificate.created_at = new Date(certificate.created_at).toLocaleString();
  certificate.updated_at = new Date(certificate.updated_at).toLocaleString();
  res.send(certificate);
});

module.exports = router;
