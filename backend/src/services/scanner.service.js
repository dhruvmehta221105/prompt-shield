const threatRules = require("../data/threatRules");

const analyzePrompt = (prompt) => {
  const text = prompt.toLowerCase();

  const threats = [];
  let riskScore = 0;

  // -------------------------------
  // Detect Threats
  // -------------------------------
  for (const rule of threatRules) {
    const matched = rule.keywords.some((keyword) =>
      text.includes(keyword)
    );

    if (matched) {
      threats.push(rule.name);
      riskScore += rule.score;
    }
  }

  // -------------------------------
  // Cap Risk Score
  // -------------------------------
  riskScore = Math.min(riskScore, 100);

  // -------------------------------
  // Calculate Severity
  // -------------------------------
  let severity = "Low";

  if (riskScore >= 80) {
    severity = "Critical";
  } else if (riskScore >= 60) {
    severity = "High";
  } else if (riskScore >= 30) {
    severity = "Medium";
  }

  // -------------------------------
  // Generate Recommendation
  // -------------------------------
  let recommendation = "Safe to Process";

  if (severity === "Medium") {
    recommendation = "Review Before Processing";
  } else if (severity === "High") {
    recommendation = "Block Prompt";
  } else if (severity === "Critical") {
    recommendation = "Immediately Block and Alert";
  }

  return {
    threats,
    riskScore,
    severity,
    recommendation,
  };
};

module.exports = {
  analyzePrompt,
};