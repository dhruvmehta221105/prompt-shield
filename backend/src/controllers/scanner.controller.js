const Scan = require("../models/Scan");
const {
  analyzePrompt: analyzePromptService,
} = require("../services/scanner.service");

const analyzePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate input
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    // Analyze prompt using service
    const analysis = analyzePromptService(prompt);

    // Save to MongoDB
    const scan = await Scan.create({
      prompt,
      threats: analysis.threats,
      riskScore: analysis.riskScore,
      severity: analysis.severity,
      recommendation: analysis.recommendation,
    });

    // Send response
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

module.exports = {
  analyzePrompt,
};