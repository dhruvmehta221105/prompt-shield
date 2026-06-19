export default function NoiseOverlay() {
    return (
      <div
        className="
        absolute inset-0
        opacity-[0.03]
        bg-[url('/noise.png')]
        pointer-events-none
        "
      />
    );
  }