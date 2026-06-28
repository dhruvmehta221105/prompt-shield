import { Threat } from "@/types/scan";

type Props = {
  threat: Threat;
};

export default function ThreatBadge({ threat }: Props) {
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
      {threat.name}
    </span>
  );
}