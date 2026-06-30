const express = require("express");

const router = express.Router();

const {
  analyzePrompt,
  getScanHistory,
  deleteScanHistory,
} = require("../controllers/scanner.controller");

router.post("/analyze", analyzePrompt);

// New Route
router.get("/history", getScanHistory);

//delete history route
router.delete("/history", deleteScanHistory);

module.exports = router;