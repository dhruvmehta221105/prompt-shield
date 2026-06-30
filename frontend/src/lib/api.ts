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

export async function getScanHistory() {
  const response = await fetch(`${API_URL}/scan/history`);

  if (!response.ok) {
    throw new Error("Failed to fetch scan history");
  }

  return response.json();
}

export async function deleteScanHistory() {
  const response = await fetch(`${API_URL}/scan/history`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete scan history");
  }

  return response.json();
}

export async function getDashboardStats() {
  const response = await fetch(`${API_URL}/dashboard/stats`);

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }

  return response.json();
}