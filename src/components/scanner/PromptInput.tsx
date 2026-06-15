import { GlassCard } from "@/components/ui/glass-card";
type Props = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export function PromptInput({
    value,
    onChange,
  }: Props) {
    return (
        <GlassCard>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste a prompt to analyze..."
        className="
          w-full
          min-h-[250px]
          rounded-2xl
          border
          bg-transparent
          p-4
        "
      />
      </GlassCard>
    );
  }