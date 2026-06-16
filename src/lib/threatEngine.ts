export function analyzePrompt(prompt: string) {
  const text = prompt.toLowerCase();

  const threats: string[] = [];

  const promptInjectionPatterns = [
    "ignore previous",
    "ignore all previous",
    "ignore instructions",
    "ignore all instructions",
    "disregard instructions",
    "forget previous instructions",
    "override instructions",
  ];

  const systemPromptPatterns = [
    "system prompt",
    "hidden system prompt",
    "hidden instructions",
    "internal instructions",
    "reveal prompt",
  ];

  const jailbreakPatterns = [
    "dan mode",
    "developer mode",
    "unrestricted ai",
    "no restrictions",
  ];

  const rolePatterns = [
    "act as root",
    "act as administrator",
    "you are now root",
  ];

  const dataPatterns = [
    "api key",
    "access token",
    "secret key",
    "database credentials",
  ];

  const checkPatterns = (
    patterns: string[],
    threat: string
  ) => {
    if (patterns.some((p) => text.includes(p))) {
      threats.push(threat);
    }
  };

  checkPatterns(promptInjectionPatterns, "Prompt Injection");
  checkPatterns(systemPromptPatterns, "System Prompt Extraction");
  checkPatterns(jailbreakPatterns, "Jailbreak Attempt");
  checkPatterns(rolePatterns, "Role Manipulation");
  checkPatterns(dataPatterns, "Data Exfiltration");

  return threats;
}