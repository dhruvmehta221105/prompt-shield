"use client";

import { GlassCard } from "@/components/ui/glass-card";

interface ThreatBreakdownProps {
  threatCounts: Record<string, number>;
  totalScans: number;
}

export default function ThreatBreakdown({ threatCounts, totalScans }: ThreatBreakdownProps) {
  const sortedThreats = Object.entries(threatCounts).sort((a, b) => b[1] - a[1]);

  return (
    <GlassCard className="p-6 mt-8">
      <h3 className="text-xl font-bold mb-6 text-white">Threat Breakdown</h3>
      {sortedThreats.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground text-sm">
          No threats detected yet.
        </div>
      ) : (
        <div className="space-y-6">
          {sortedThreats.map(([threat, count]) => {
            const percentage = totalScans > 0 ? Math.round((count / totalScans) * 100) : 0;
            return (
              <div key={threat} className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-white/90">{threat}</span>
                  <span className="text-muted-foreground">
                    {count} {count === 1 ? "occurrence" : "occurrences"} ({percentage}%)
                  </span>
                </div>
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-[#0a767b] to-[#00a7d6] rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
}
