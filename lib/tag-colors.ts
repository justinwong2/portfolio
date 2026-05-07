export const NEON_TAG_PALETTE: Record<string, string> = {
  "PYTHON": "#39FF14",
  "ML": "#FF00C7",
  "PYTORCH": "#FF6B00",
  "AWS": "#FFD60A",
  "TYPESCRIPT": "#00C2FF",
  "NEXT.JS": "#FFFFFF",
  "POSTGRES": "#39FF14",
  "STRIPE": "#FF00C7",
  "REACT": "#00C2FF",
  "PWA": "#FFD60A",
  "FASTAPI": "#FF6B00",
  "MEDICAL": "#FF3030",
  "RUST": "#FF6B00",
  "CLI": "#FFD60A",
  "DEVTOOLS": "#00C2FF",
  "D3.JS": "#FF00C7",
  "WEBSOCKETS": "#39FF14",
  "NODE.JS": "#39FF14",
  "OAUTH": "#FFD60A",
  "SECURITY": "#FF3030",
  "REACT NATIVE": "#00C2FF",
  "SQLITE": "#FFFFFF",
  "MOBILE": "#FF00C7",
  "MLOPS": "#FF00C7",
  "KUBERNETES": "#00C2FF",
};

export const DEFAULT_TAG_COLOR = "#888";

export function getTagColor(tag: string): string {
  return NEON_TAG_PALETTE[tag.toUpperCase()] ?? DEFAULT_TAG_COLOR;
}
