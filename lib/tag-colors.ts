export const NEON_TAG_PALETTE: Record<string, string> = {
  "PYTHON": "#FFD60A",      // Yellow (Python logo)
  "ML": "#FF00C7",          // Magenta
  "PYTORCH": "#FF4500",     // Orange-red (PyTorch brand)
  "AWS": "#FF9500",         // Orange (AWS brand)
  "TYPESCRIPT": "#3178FF",  // Blue (TypeScript brand)
  "NEXT.JS": "#FFFFFF",     // White (Next.js)
  "POSTGRES": "#00BFFF",    // Sky blue (PostgreSQL blue elephant)
  "REACT": "#61DAFB",       // Cyan (React official)
  "PWA": "#A855F7",         // Purple
  "FASTAPI": "#00E5A0",     // Teal (FastAPI brand)
  "MEDICAL": "#FF3030",     // Red
  "WEBSOCKETS": "#39FF14",  // Neon green
  "NODE.JS": "#39FF14",     // Green (Node.js brand)
  "OAUTH": "#FFD60A",       // Yellow
  "SECURITY": "#FF3030",    // Red
  "SQLITE": "#00BFFF",      // Blue (SQLite)
  "MOBILE": "#FF00C7",      // Magenta
  "MLOPS": "#FF00C7",       // Magenta
  "KUBERNETES": "#326CE5",  // Blue (K8s brand)
  "AUTOMATION": "#FF9500",  // Orange
  "VUE": "#00FF7F",         // Green (Vue brand, neon)
  "SUPABASE": "#3ECF8E",    // Green (Supabase brand)
  "AGENTS": "#BF00FF",      // Electric purple (AI/autonomous)
  "FIREBASE": "#FFCA28",    // Amber (Firebase brand)
  "MLFLOW": "#0194E2",      // Blue (MLflow brand)
};

export const DEFAULT_TAG_COLOR = "#888";

export function getTagColor(tag: string): string {
  return NEON_TAG_PALETTE[tag.toUpperCase()] ?? DEFAULT_TAG_COLOR;
}
