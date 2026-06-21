"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { GlassCard } from "@/components/ui/glass-card";
import type { ScanResult } from "@/types/scan";

interface RiskChartProps {
  history: ScanResult[];
}

export default function RiskChart({ history }: RiskChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const counts = {
    Low: 0,
    Medium: 0,
    High: 0,
    Critical: 0,
  };

  history.forEach((scan) => {
    const sev = scan.severity;
    if (sev in counts) {
      counts[sev as keyof typeof counts]++;
    }
  });

  const data = [
    { name: "Low", value: counts.Low, color: "#22c55e" },       // Green
    { name: "Medium", value: counts.Medium, color: "#eab308" },   // Yellow
    { name: "High", value: counts.High, color: "#f97316" },       // Orange
    { name: "Critical", value: counts.Critical, color: "#ef4444" }, // Red
  ];

  return (
    <GlassCard className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-6 text-white">Risk Distribution</h3>
      <div className="flex-1 min-h-[300px] w-full">
        {!isMounted ? (
          <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground text-sm">
            Loading chart...
          </div>
        ) : history.length === 0 ? (
          <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground text-sm">
            No scan data available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="rgba(255,255,255,0.4)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="rgba(255,255,255,0.4)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.03)", radius: 8 }}
                contentStyle={{
                  backgroundColor: "#1f1f1f",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={50}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </GlassCard>
  );
}
