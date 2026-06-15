export function calculateRisk(
    threats: string[]
  ) {
    return Math.min(threats.length * 30, 100);
  }