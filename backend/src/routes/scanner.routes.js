const express = require("express");

const router = express.Router();

const {
  analyzePrompt,
} = require("../controllers/scanner.controller");

router.post("/analyze", analyzePrompt);

module.exports = router;