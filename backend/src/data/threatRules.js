const threatRules = [
  {
  name: "Prompt Injection",
  category: "Injection",
  description: "Attempts to override or ignore the model's original instructions.",
  keywords: [
    "ignore previous instructions",
    "ignore all previous instructions",
  ],
  score: 40,
},
  {
    name: "System Prompt Extraction",
    category: "Extraction",
    description: "Attempts to extract the model's system prompt.",
    keywords: [
      "system prompt",
      "hidden instructions",
      "internal instructions",
      "reveal your prompt",
    ],
    score: 35,
  },
 {
  name: "Role Manipulation",
  category: "Manipulation",
  description: "Attempts to manipulate the model into adopting a different role or persona.",
  keywords: [
    "pretend to be",
    "act as",
    "roleplay as",
    "assume the role",
    "you are now",
    "behave like"
  ],
  score: 25,
},
  {
    name: "Jailbreak Attempt",
    category: "Jailbreak",
    description: "Attempts to bypass the model's safety measures and restrictions.",
    keywords: [
      "you are dan",
      "do anything now",
      "developer mode",
      "ignore openai policies",
      "unrestricted ai",
      "no restrictions",
    ],
    score: 30,
  },
  {
  name: "Data Exfiltration",
  category: "Extraction",
  description: "Attempts to extract sensitive data from the model.",
  keywords: [
    "export database",
    "dump database",
    "show all users",
    "customer data",
    "confidential information",
    "private data",
    "sensitive information",
    "leak data",
    "show passwords",
    "database dump"
  ],
  score: 35,
},
];

module.exports = threatRules;