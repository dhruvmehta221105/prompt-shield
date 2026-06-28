"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import {
  analyzePrompt as analyzePromptAPI,
  getScanHistory,
} from "@/lib/api";
import SeverityBadge from "@/components/scanner/SeverityBadge";
import ThreatBadge from "@/components/scanner/ThreatBadge";
import type { ScanResult , Threat} from "@/types/scan";
import AppNavbar from "@/components/dashboard/AppNavbar";

export default function ScannerPage() {
  const [prompt, setPrompt] = useState("");
  const [score, setScore] = useState(0);
 const [threats, setThreats] = useState<Threat[]>([]);
  const [hasScanned, setHasScanned] = useState(false);
  const [history, setHistory] = useState<ScanResult[]>([]);

  const getSeverity = (score: number) => {
    if (score >= 75) return "Critical";
    if (score >= 50) return "High";
    if (score >= 25) return "Medium";
    return "Low";
  };

  const getRecommendation = (score: number) => {
    if (score >= 75) return "Block prompt immediately.";
    if (score >= 50) return "Review before sending.";
    if (score >= 25) return "Proceed with caution.";
    return "Prompt appears safe.";
    
  };
  const getActions = (score: number, threats: Threat[]) => {
  const actions: string[] = [];

  if (score >= 75)
    actions.push("Block this prompt before sending to the AI model.");

  if (score >= 50)
    actions.push("Review the prompt manually before submission.");

  if (threats.some((t) => t.name === "Prompt Injection"))
    actions.push("Remove instructions that attempt to override the model.");

  if (threats.some((t) => t.name === "Jailbreak Attempt"))
    actions.push("Avoid prompts designed to bypass AI safety measures.");

  if (threats.some((t) => t.name === "System Prompt Extraction"))
    actions.push("Never request hidden system prompts or confidential instructions.");

  if (actions.length === 0)
    actions.push("No security actions required.");

  return actions;
};
  const getStatus = (score: number) => {
  if (score >= 75) return "Blocked";
  if (score >= 50) return "Needs Review";
  if (score >= 25) return "Caution";
  return "Safe";
};


  const severity = getSeverity(score);

  const loadHistory = async () => {
  try {
    const response = await getScanHistory();
    setHistory(response.data);
  } catch (error) {
    console.error("Failed to load history:", error);
  }
};

  useEffect(() => {
  loadHistory();
}, []);

const handleAnalyze = async () => {
  try {
    const response = await analyzePromptAPI(prompt);
    const data = response.data;

    setThreats(data.threats);
    setScore(data.riskScore);
    setHasScanned(true);

    const scan: ScanResult = {
      prompt,
      riskScore: data.riskScore,
      severity: data.severity,
      recommendation: data.recommendation,
      threats: data.threats,
      timestamp: new Date().toISOString(),
    };

    const existing: ScanResult[] = JSON.parse(
      localStorage.getItem("scan-history") || "[]"
    );

    const updated = [scan, ...existing];

    localStorage.setItem(
      "scan-history",
      JSON.stringify(updated)
    );

    setHistory(updated);
  } catch (error) {
    console.error(error);
    alert("Failed to analyze prompt.");
  }
};
   

  return (
    <>
    <AppNavbar />
    <main className="container mx-auto pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Prompt Scanner
        </h1>

        <p className="text-center text-muted-foreground mb-10">
          Analyze prompts for jailbreaks, prompt injections,
          and security threats.
        </p>

        <GlassCard className="p-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Paste a prompt to analyze..."
            className="
              w-full
              min-h-[250px]
              rounded-xl
              border
              bg-transparent
              p-4
              outline-none
            "
          />
        </GlassCard>

        <button
          onClick={handleAnalyze}
          className="
            mt-6
            w-full
            rounded-xl
            border
            py-3
            font-semibold
            transition
            hover:opacity-90
          "
        >
          Analyze Prompt
        </button>

        {hasScanned && (
          <GlassCard className="mt-8 p-6">
           <h2 className="text-2xl font-bold">
  Security Analysis Report
</h2>

<p className="text-sm text-muted-foreground mt-1">
  Complete security assessment of the submitted prompt.
</p>
<div className="mt-6">
  <div className="flex justify-between items-center mb-2">
    <span className="font-medium">Overall Risk</span>
    <span className="font-semibold">{score}/100</span>
  </div>

  <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
    <div
      className={`h-full transition-all duration-500 ${
        score >= 75
          ? "bg-red-500"
          : score >= 50
          ? "bg-orange-500"
          : score >= 25
          ? "bg-yellow-500"
          : "bg-green-500"
      }`}
      style={{ width: `${score}%` }}
    />
  </div>
</div>

            <div className="grid grid-cols-2 gap-4 mt-6">

  <div className="rounded-lg border p-4">
    <p className="text-sm text-muted-foreground">
      Severity
    </p>

    <div className="mt-2">
      <SeverityBadge severity={severity} />
    </div>
  </div>

  <div className="rounded-lg border p-4">
    <p className="text-sm text-muted-foreground">
      Status
    </p>

    <p className="mt-2 font-semibold">
      {getStatus(score)}
    </p>
  </div>

  <div className="rounded-lg border p-4">
    <p className="text-sm text-muted-foreground">
      Threats Found
    </p>

    <p className="mt-2 text-2xl font-bold">
      {threats.length}
    </p>
  </div>

  <div className="rounded-lg border p-4">
    <p className="text-sm text-muted-foreground">
      Risk Score
    </p>

    <p className="mt-2 text-2xl font-bold">
      {score}/100
    </p>
  </div>

</div>

           <div className="mt-8">
  <h3 className="text-lg font-semibold mb-4">
    Threat Analysis
  </h3>

  {threats.length === 0 ? (
    <p className="text-muted-foreground">
      No threats detected.
    </p>
  ) : (
    <div className="space-y-4">
     {threats.map((threat) => (
  <div
    key={threat.name}
    className="rounded-xl border p-4"
  >
    <div className="flex items-center justify-between">
      <ThreatBadge threat={threat} />
    </div>

    <div className="mt-3 space-y-2">
      <p className="text-sm">
        <span className="font-semibold">Category:</span>{" "}
        {threat.category}
      </p>

      <p className="text-sm">
        <span className="font-semibold">Risk Score:</span>{" "}
        {threat.score}
      </p>

      <p className="text-sm text-muted-foreground">
        {threat.description}
      </p>
    </div>
  </div>
))}
    </div>
  )}
</div>

            <div className="mt-8">
  <h3 className="text-lg font-semibold mb-4">
    Recommended Actions
  </h3>

  <ul className="space-y-3">
    {getActions(score, threats).map((action, index) => (
      <li
        key={index}
        className="flex items-start gap-3 rounded-lg border p-3"
      >
        <span className="text-green-500 font-bold">✓</span>

        <span className="text-sm">
          {action}
        </span>
      </li>
    ))}
  </ul>
</div>
          </GlassCard>
        )}

        <GlassCard className="mt-8 p-6">
          <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-bold">
    Recent Scans
  </h2>

  <button
   onClick={() => {
  alert("Clear history will be added in a future update.");
}}
    className="text-sm text-red-400"
  >
    Clear
  </button>
</div>


{history.length === 0 ? (
  <p className="text-muted-foreground">
    No scans yet.
  </p>
) : (
  history.slice(0, 5).map((scan, index) => (
    <div
      key={index}
      className="border-b py-3 last:border-0"
    >
      <p className="font-medium">
        {scan.severity} • {scan.riskScore}/100
      </p>

      <p className="text-sm text-muted-foreground">
      {scan.threats
  .map((t: any) => (typeof t === "string" ? t : t.name))
  .join(", ")}
      </p>

      <p className="text-xs text-muted-foreground mt-1">
        {new Date(
  (scan as any).createdAt || scan.timestamp
).toLocaleString()}
      </p>
    </div>
  ))
)}
        </GlassCard>
      </div>
    </main>
    </>
  );
}