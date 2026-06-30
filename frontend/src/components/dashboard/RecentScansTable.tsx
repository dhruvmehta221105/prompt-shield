"use client";

import { GlassCard } from "@/components/ui/glass-card";
import type { ScanResult } from "@/types/scan";
import SeverityBadge from "@/components/scanner/SeverityBadge";

interface RecentScansTableProps {
  history: ScanResult[];
}

export default function RecentScansTable({
  history,
}: RecentScansTableProps) {
  const truncatePrompt = (prompt: string) => {
    return prompt.length > 60
      ? prompt.slice(0, 60) + "..."
      : prompt;
  };

  return (
    <GlassCard className="p-6 mt-8 overflow-hidden">
      <h3 className="text-xl font-bold mb-6">
        Recent Scans
      </h3>

      {history.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground text-sm">
          No scans recorded yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-muted-foreground">
                <th className="pb-3 pr-4">Prompt</th>
                <th className="pb-3 px-4 text-center">
                  Score
                </th>
                <th className="pb-3 px-4 text-center">
                  Severity
                </th>
                <th className="pb-3 pl-4 text-right">
                  Timestamp
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5 text-sm">
              {history.map((scan, index) => (
                <tr
                  key={index}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td
                    className="py-3.5 pr-4 font-mono text-xs max-w-xs md:max-w-md truncate"
                    title={scan.prompt}
                  >
                    {truncatePrompt(scan.prompt)}
                  </td>

                  <td className="py-3.5 px-4 text-center font-semibold">
                    {scan.riskScore}/100
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <SeverityBadge severity={scan.severity} />
                  </td>

                  <td className="py-3.5 pl-4 text-right text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(
                      (scan as any).createdAt || scan.timestamp
                    ).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </GlassCard>
  );
}