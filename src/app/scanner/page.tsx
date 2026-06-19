"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { analyzePrompt } from "@/lib/threatEngine";
import { calculateRisk } from "@/lib/riskCalculator";
import SeverityBadge from "@/components/scanner/SeverityBadge";
import ThreatBadge from "@/components/scanner/ThreatBadge";
import type { ScanResult } from "@/types/scan";
import AppNavbar from "@/components/dashboard/AppNavbar";

export default function ScannerPage() {
  const [prompt, setPrompt] = useState("");
  const [score, setScore] = useState(0);
  const [threats, setThreats] = useState<string[]>([]);
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

  const severity = getSeverity(score);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("scan-history") || "[]"
    );

    setHistory(stored);
  }, []);

  const handleAnalyze = () => {
    const detected = analyzePrompt(prompt);
    const risk = calculateRisk(detected);

    setThreats(detected);
    setScore(risk);
    setHasScanned(true);

    const scan: ScanResult = {
      prompt,
      score: risk,
      severity: getSeverity(risk),
      threats: detected,
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
              Risk Score: {score}/100
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Threat Count: {threats.length}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="font-semibold">
                Severity:
              </span>

              <SeverityBadge severity={severity} />
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Threats Detected
              </h3>

              {threats.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {threats.map((threat) => (
                    <ThreatBadge
                      key={threat}
                      threat={threat}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No threats detected.
                </p>
              )}
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">
                Recommendation
              </h3>

              <p>{getRecommendation(score)}</p>
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
      localStorage.removeItem("scan-history");
      setHistory([]);
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
        {scan.severity} • {scan.score}/100
      </p>

      <p className="text-sm text-muted-foreground">
        {scan.threats.join(", ")}
      </p>

      <p className="text-xs text-muted-foreground mt-1">
        {new Date(scan.timestamp).toLocaleString()}
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