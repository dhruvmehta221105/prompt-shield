export function analyzePrompt(prompt: string) {
    const text = prompt.toLowerCase();
  
    const threats: string[] = [];
  
    if (text.includes("ignore previous")) {
      threats.push("Prompt Injection");
    }
  
    if (text.includes("system prompt")) {
      threats.push("System Prompt Extraction");
    }
  
    return threats;
  }