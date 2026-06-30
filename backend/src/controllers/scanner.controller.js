const Scan = require("../models/Scan");
const {
  analyzePrompt: analyzePromptService,
} = require("../services/scanner.service");

// -----------------------------
// Analyze Prompt
// -----------------------------
const analyzePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const analysis = analyzePromptService(prompt);

    const scan = await Scan.create({
      prompt,
      threats: analysis.threats,
      riskScore: analysis.riskScore,
      severity: analysis.severity,
      recommendation: analysis.recommendation,
    });

    res.status(201).json({
      success: true,
      message: "Prompt analyzed successfully",
      data: scan,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// -----------------------------
// Get Scan History
// -----------------------------
const getScanHistory = async (req, res) => {
  try {
    const scans = await Scan.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: scans.length,
      data: scans,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch scan history",
    });
  }
};

// Delete Scan History
const deleteScanHistory = async (req, res) => {
  try {
    await Scan.deleteMany({});

    res.status(200).json({
      success: true,
      message: "Scan history deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete scan history",
    });
  }
};

module.exports = {
  analyzePrompt,
  getScanHistory,
  deleteScanHistory,
};