"use client";

import { GlassCard } from "@/components/ui/glass-card";
import type { ScanResult } from "@/types/scan";
import SeverityBadge from "@/components/scanner/SeverityBadge";

interface RecentActivityProps {
  history: ScanResult[];
}

function getRelativeTime(timestamp: string) {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  return date.toLocaleDateString();
}

export default function RecentActivity({ history }: RecentActivityProps) {
  const latestScans = history.slice(0, 5);

  return (
    <GlassCard className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-6 text-white">Recent Activity</h3>
      <div className="flex-1 flex flex-col justify-between">
        {latestScans.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm min-h-[300px]">
            No recent activity
          </div>
        ) : (
          <div className="space-y-4">
            {latestScans.map((scan, index) => {
              const firstThreat = scan.threats.length > 0 ? scan.threats[0] : "None";
              const timeDisplay = getRelativeTime(scan.timestamp);

              return (
                <div key={index} className="flex flex-col gap-2 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <SeverityBadge severity={scan.severity} />
                      <span className="text-sm font-semibold text-white/90">
                        Score: {scan.score}/100
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {timeDisplay}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="font-medium text-white/70">First Threat:</span>
                    <span className={scan.threats.length > 0 ? "text-red-400 font-medium" : "text-green-400 font-medium"}>
                      {firstThreat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
