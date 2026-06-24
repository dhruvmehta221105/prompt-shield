type Props = {
    severity: string;
  };
  
  export default function SeverityBadge({
    severity,
  }: Props) {
    const colors = {
      Low: "bg-green-500/20 text-green-400 border-green-500/30",
      Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      High: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Critical: "bg-red-500/20 text-red-400 border-red-500/30",
    };
  
    return (
      <span
        className={`
          px-3 py-1
          rounded-full
          text-sm
          border
          ${
            colors[
              severity as keyof typeof colors
            ]
          }
        `}
      >
        {severity}
      </span>
    );
  }