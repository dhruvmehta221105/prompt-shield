"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { useState } from "react";
import { analyzePrompt } from "@/lib/threatEngine";
import { calculateRisk } from "@/lib/riskCalculator";

export default function ScannerPage() {
  const [prompt, setPrompt] = useState("");
  const [score, setScore] = useState(0);
const [threats, setThreats] = useState<string[]>([]);
const handleAnalyze = () => {
    const detected = analyzePrompt(prompt);
  
    const risk = calculateRisk(detected);
  
    setThreats(detected);
    setScore(risk);
  };
  return (
    <main className="container mx-auto py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Prompt Scanner
        </h1>

        <p className="text-center text-muted-foreground mb-10">
          Analyze prompts for jailbreaks, prompt injections, and
          security threats.
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
          "
        >
          Analyze Prompt
        </button>
        {threats.length > 0 && (
  <div className="mt-8 rounded-xl border p-6">
    <h2 className="text-2xl font-bold">
      Risk Score: {score}/100
    </h2>

    <div className="mt-4">
      {threats.map((threat) => (
        <p key={threat}>
          • {threat}
        </p>
      ))}
    </div>
  </div>
)}
        <div className="mt-8 rounded-2xl border p-6">
  <h3 className="text-xl font-semibold">
    Scan Results
  </h3>

  <p className="text-muted-foreground mt-2">
    Enter a prompt and click Analyze Prompt.
  </p>
</div>
      </div>
    </main>
  );
}