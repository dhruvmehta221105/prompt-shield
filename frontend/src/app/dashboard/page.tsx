"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { useEffect, useState } from "react";
import type { ScanResult } from "@/types/scan";
import{
  getDashboardStats,
  getScanHistory,
}from "@/lib/api";
import {
    ScanSearch,
    ShieldAlert,
    TriangleAlert,
    Bug,
    Scan,
  } from "lucide-react";
import AppNavbar from "@/components/dashboard/AppNavbar";
import RiskChart from "@/components/dashboard/RiskChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ThreatBreakdown from "@/components/dashboard/ThreatBreakdown";
import RecentScansTable from "@/components/dashboard/RecentScansTable";

export default function DashboardPage() {
    const [history, setHistory] = useState<ScanResult[]>([]);
    const [stats, setStats] = useState({
  totalScans: 0,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
  averageRisk: 0,
});

const loadDashboardStats = async () => {
  try {
    const response = await getDashboardStats();
    setStats(response.data);
  } catch (error) {
    console.error("Failed to load dashboard stats:", error);
  }
};

 const loadHistory = async () => {
  try {
    const response = await getScanHistory();
    setHistory(response.data);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  loadDashboardStats();
  loadHistory();
}, []);
      const totalScans = history.length; 
      const averageRisk =
  totalScans > 0
    ? Math.round(
        history.reduce((sum, scan) => sum + scan.riskScore, 0) / totalScans
      )
    : 0;   
    const highRiskScans = history.filter(
        scan => scan.riskScore >= 50
      ).length;
      const threatCounts: Record<string, number> = {};
      const getInsights = () => {
  const insights: string[] = [];

  if (stats.averageRisk >= 50) {
    insights.push(
      "Average prompt risk is high. Review prompts before sending."
    );
  } else {
    insights.push(
      "Most analyzed prompts fall within an acceptable risk range."
    );
  }

  if (topThreat !== "None") {
    insights.push(
      `${topThreat} is the most frequently detected threat.`
    );
  }

  if (stats.high + stats.critical === 0) {
    insights.push(
      "No High or Critical risk prompts have been detected."
    );
  }

  insights.push(
    `${totalScans} prompts have been analyzed so far.`
  );

  return insights;
};

history.forEach((scan) => {
  scan.threats.forEach((threat) => {
    const threatName =
      typeof threat === "string"
        ? threat
        : threat.name;

    threatCounts[threatName] =
      (threatCounts[threatName] || 0) + 1;
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
      {stats.totalScans}
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
      {stats.averageRisk}/100
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
      {stats.high+stats.critical}
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

        {/* Charts & Activity Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <RiskChart history={history} />
          <RecentActivity history={history} />
        </div>

        {/* Threat Breakdown Component */}
        <ThreatBreakdown threatCounts={threatCounts} totalScans={stats.totalScans} />

        <GlassCard className="p-6 mt-6">
  <h2 className="text-xl font-bold mb-4">
    Security Insights
  </h2>

  <ul className="space-y-3">
    {getInsights().map((item, index) => (
      <li
        key={index}
        className="flex items-start gap-3"
      >
        <span>•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</GlassCard>

        {/* Recent Scans Table Component */}
        <RecentScansTable history={history} />
      </div>
    </main>
    </>
  );
}