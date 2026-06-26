const threatRules = [
  {
    name: "Prompt Injection",
    keywords: [
      "ignore previous instructions",
      "ignore all previous instructions",
    ],
    score: 40,
  },
  {
    name: "System Prompt Extraction",
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
    keywords: [
        "pretend to be",
        "act as",
        "roleplay as"
    ],
    score:25
},
  {
    name: "Jailbreak Attempt",
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
];

module.exports = threatRules;