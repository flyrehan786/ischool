const certificateModel = require("../models/certificates");
const studentModel = require('../models/students');
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const certificates = await certificateModel.findAll();
  certificates.forEach(s => {
    s.created_at = new Date(s.created_at).toLocaleString();
    s.updated_at = new Date(s.updated_at).toLocaleString();
  })
  res.send(certificates);
});

router.post("/issue/new", async (req, res) => {
  if(req.body.student_id && req.body.certificate_id) {
    const createdRecord = await certificateModel.saveIssueCertificate(req.body);
    if (createdRecord) res.send(createdRecord);
    else res.status(400).send('Something failed while adding record.');
  } else res.status(400).send('Invalid request body')
});


router.get("/issued/:studentId", async (req, res) => {
  const issuedCertificates = await certificateModel.findIssuedCertificatesByStudentId(req.params.studentId);
  for (let i = 0; i < issuedCertificates.length; i++) {
    const issuedCertificate = issuedCertificates[i];
    const studentId = issuedCertificate['student_id'];
    const certificateId = issuedCertificate['certificate_id'];
    const studentInfo = await studentModel.findStudent(studentId);
    const certificateInfo = await certificateModel.findCertificate(certificateId);

    issuedCertificate.student = studentInfo;
    issuedCertificate.student_registration_no = studentInfo.registration_no;
    issuedCertificate.student_first_name = studentInfo.first_name;
    issuedCertificate.student_last_name = studentInfo.last_name;
    issuedCertificate.student_gender = studentInfo.gender;
    issuedCertificate.student_cnic = studentInfo.cnic;
    issuedCertificate.student_age = studentInfo.age;
    issuedCertificate.student_father_name = studentInfo.father_name;
    issuedCertificate.student_father_cnic = studentInfo.father_cnic;
    issuedCertificate.student_post_office = studentInfo.post_office;
    issuedCertificate.student_tehsil = studentInfo.tehsil;
    issuedCertificate.student_district = studentInfo.district;

    issuedCertificate.certificate = certificateInfo;
    issuedCertificate.certificate_name = certificateInfo.name;
    issuedCertificate.certificate_template = certificateInfo.template

    issuedCertificate.created_at = new Date(issuedCertificate.created_at).toLocaleString();
    issuedCertificate.updated_at = new Date(issuedCertificate.updated_at).toLocaleString();
  }
  res.send(issuedCertificates);
});


router.get("/issued", async (req, res) => {
    const issuedCertificates = await certificateModel.findIssuedCertificates();
    for (let i = 0; i < issuedCertificates.length; i++) {
      const issuedCertificate = issuedCertificates[i];
      const studentId = issuedCertificate['student_id'];
      const certificateId = issuedCertificate['certificate_id'];
      const studentInfo = await studentModel.findStudent(studentId);
      const certificateInfo = await certificateModel.findCertificate(certificateId);

      issuedCertificate.student = studentInfo;
      issuedCertificate.student_registration_no = studentInfo.registration_no;
      issuedCertificate.student_first_name = studentInfo.first_name;
      issuedCertificate.student_last_name = studentInfo.last_name;
      issuedCertificate.student_gender = studentInfo.gender;
      issuedCertificate.student_cnic = studentInfo.cnic;
      issuedCertificate.student_age = studentInfo.age;
      issuedCertificate.student_father_name = studentInfo.father_name;
      issuedCertificate.student_father_cnic = studentInfo.father_cnic;
      issuedCertificate.student_post_office = studentInfo.post_office;
      issuedCertificate.student_tehsil = studentInfo.tehsil;
      issuedCertificate.student_district = studentInfo.district;

      issuedCertificate.certificate = certificateInfo;
      issuedCertificate.certificate_name = certificateInfo.name;
      issuedCertificate.certificate_template = certificateInfo.template

      issuedCertificate.created_at = new Date(issuedCertificate.created_at).toLocaleString();
      issuedCertificate.updated_at = new Date(issuedCertificate.updated_at).toLocaleString();
    }
    res.send(issuedCertificates);
});

router.post("/", async (req, res) => {
  const { error } = certificateModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const createdCertificate = await saveCertificate(req.body);
  res.send(createdCertificate);
});

router.put("/:id", async (req, res) => {
  const { error } = certificateModel.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const updatedCertificate = await certificateModel.updateCertificate(
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
  const rowsAffected = await certificateModel.deleteCertificate(req.params.id);
  if (rowsAffected == false) {
    return res
    .status(404)
    .send("The certificate with the given ID was not found.");
  }
  res.send({ deleted: true });
});

router.get("/:id", async (req, res) => {
  const certificate = await certificateModel.findCertificate(req.params.id);
  if (!certificate)
    return res
      .status(404)
      .send("The certificate with the given ID was not found.");

  certificate.created_at = new Date(certificate.created_at).toLocaleString();
  certificate.updated_at = new Date(certificate.updated_at).toLocaleString();
  res.send(certificate);
});

module.exports = router;
