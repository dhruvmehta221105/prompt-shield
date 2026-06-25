const Scan = require("../models/Scan");

const analyzePrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    
    if (!prompt || prompt.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    
    const scan = await Scan.create({
      prompt,
      threats: [],
      riskScore: 0,
      severity: "Low",
      recommendation: "No threats detected",
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

module.exports = {
  analyzePrompt,
};