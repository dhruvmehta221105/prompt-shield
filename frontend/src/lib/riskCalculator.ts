const weights: Record<string, number> = {
  "Prompt Injection": 30,
  "System Prompt Extraction": 35,
  "Jailbreak Attempt": 25,
  "Role Manipulation": 20,
  "Data Exfiltration": 40,
};

export function calculateRisk(
  threats: string[]
) {
  let score = 0;

  threats.forEach((threat) => {
    score += weights[threat] || 0;
  });

  return Math.min(score, 100);
}