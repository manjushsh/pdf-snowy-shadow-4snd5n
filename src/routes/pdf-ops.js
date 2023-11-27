const express = require("express");
const pdfOpsControllers = require("../controllers/pdf-ops");

const router = express.Router();

/* GET users listing. */
router.get("/", pdfOpsControllers.samplePDFReader);

module.exports = router;
