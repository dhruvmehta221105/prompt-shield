const express = require("express");

const router = express.Router();

const {
  analyzePrompt,
  getScanHistory,
} = require("../controllers/scanner.controller");

router.post("/analyze", analyzePrompt);

// New Route
router.get("/history", getScanHistory);

module.exports = router;