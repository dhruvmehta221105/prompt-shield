const analyzePrompt = (prompt) => {
  const text = prompt.toLowerCase();

  const threats = [];
  let riskScore = 0;

  // -------------------------------
  // Prompt Injection Detection
  // -------------------------------
  if (
    text.includes("ignore previous instructions") ||
    text.includes("ignore all previous instructions")
  ) {
    threats.push("Prompt Injection");
    riskScore += 40;
  }

  // -------------------------------
  // System Prompt Extraction Detection
  // -------------------------------
  if (
    text.includes("system prompt") ||
    text.includes("hidden instructions") ||
    text.includes("internal instructions") ||
    text.includes("reveal your prompt")
  ) {
    threats.push("System Prompt Extraction");
    riskScore += 35;
  }

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