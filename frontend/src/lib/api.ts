const API_URL = "http://localhost:5000/api";

export async function analyzePrompt(prompt: string) {
  const response = await fetch(`${API_URL}/scan/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to analyze prompt");
  }

  return response.json();
}