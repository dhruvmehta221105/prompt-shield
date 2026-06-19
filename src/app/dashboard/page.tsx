"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { useEffect, useState } from "react";
import type { ScanResult } from "@/types/scan";
import {
    ScanSearch,
    ShieldAlert,
    TriangleAlert,
    Bug,
    Scan,
  } from "lucide-react";
  import AppNavbar from "@/components/dashboard/AppNavbar";

export default function DashboardPage() {
    const [history, setHistory] = useState<ScanResult[]>([]);

    useEffect(() => {
        const stored = JSON.parse(
          localStorage.getItem("scan-history") || "[]"
        );
      
        setHistory(stored);
      }, []);
      const totalScans = history.length; 
      const averageRisk =
  totalScans > 0
    ? Math.round(
        history.reduce((sum, scan) => sum + scan.score, 0) / totalScans
      )
    : 0;   
    const highRiskScans = history.filter(
        scan => scan.score >= 50
      ).length;
      const threatCounts: Record<string, number> = {};

history.forEach((scan) => {
  scan.threats.forEach((threat) => {
    threatCounts[threat] = (threatCounts[threat] || 0) + 1;
  });
});

const topThreat =
  Object.entries(threatCounts).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0] || "None";
    return (
      <>
      <AppNavbar />
          <main className="container mx-auto pt-32 pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Security Dashboard
        </h1>

        <p className="text-center text-muted-foreground mb-10">
          Monitor prompt security, scan history, and threat analytics.
        </p>

       {/* Stats Grid */}
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {/* Total Scans */}
  <GlassCard className="p-6">
    <div className="flex items-center gap-3">
      <ScanSearch className="h-6 w-6 text-cyan-400" />
      <h3 className="text-lg font-semibold">Total Scans</h3>
    </div>

    <p className="mt-6 text-4xl font-bold">
      {totalScans}
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      All prompts analyzed
    </p>
  </GlassCard>

  {/* Average Risk */}
  <GlassCard className="p-6">
    <div className="flex items-center gap-3">
      <ShieldAlert className="h-6 w-6 text-yellow-400" />
      <h3 className="text-lg font-semibold">Average Risk</h3>
    </div>

    <p className="mt-6 text-4xl font-bold">
      {averageRisk}/100
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      Across all scans
    </p>
  </GlassCard>

  {/* High Risk Scans */}
  <GlassCard className="p-6">
    <div className="flex items-center gap-3">
      <TriangleAlert className="h-6 w-6 text-orange-400" />
      <h3 className="text-lg font-semibold">High Risk Scans</h3>
    </div>

    <p className="mt-6 text-4xl font-bold">
      {highRiskScans}
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      Risk score ≥ 50
    </p>
  </GlassCard>

  {/* Top Threat */}
  <GlassCard className="p-6">
    <div className="flex items-center gap-3">
      <Bug className="h-6 w-6 text-red-400" />
      <h3 className="text-lg font-semibold">Top Threat</h3>
    </div>

    <p className="mt-6 text-3xl font-bold break-words">
      {topThreat}
    </p>

    <p className="mt-2 text-sm text-muted-foreground">
      Most frequently detected
    </p>
  </GlassCard>
</div>
      </div>
    </main>
    </>
  );
}