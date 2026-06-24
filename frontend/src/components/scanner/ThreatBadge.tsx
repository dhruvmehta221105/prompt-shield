type Props = {
    threat: string;
  };
  
  export default function ThreatBadge({
    threat,
  }: Props) {
    return (
      <span
        className="
          rounded-lg
          border
          px-3
          py-2
          text-sm
        "
      >
        {threat}
      </span>
    );
  }