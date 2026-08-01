import type { ReactNode } from "react";
import { SupernovaLogo as SupernovaMark } from "@/components/branding";

/* Shared decorative background used across slides */
export function SlideBackdrop({ variant = "default" }: { variant?: "default" | "hero" | "dim" }) {
  return (
    <>
      <div className="grid-backdrop absolute inset-0 opacity-40" />
      {variant === "hero" && (
        <>
          <div className="glow-warm pulse-glow" style={{ width: 900, height: 900, background: "#8B5A2B", top: -200, left: -200, opacity: 0.55 }} />
          <div className="glow-warm pulse-glow" style={{ width: 700, height: 700, background: "#FFDAB9", bottom: -180, right: -140, opacity: 0.28 }} />
        </>
      )}
      {variant === "default" && (
        <>
          <div className="glow-warm" style={{ width: 700, height: 700, background: "#8B5A2B", top: -150, right: -180, opacity: 0.35 }} />
          <div className="glow-warm" style={{ width: 500, height: 500, background: "#FFDAB9", bottom: -160, left: -160, opacity: 0.14 }} />
        </>
      )}
      {variant === "dim" && (
        <div className="glow-warm" style={{ width: 600, height: 600, background: "#8B5A2B", top: 200, left: 660, opacity: 0.22 }} />
      )}
      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)" }} />
    </>
  );
}

export function SlideChrome({ index, total, section }: { index: number; total: number; section: string }) {
  return (
    <>
      <div className="absolute top-14 left-20 flex items-center gap-4 slide-chrome slide-in" style={{ animationDelay: "0.05s" }}>
        <SupernovaMark />
        <span className="text-white/70" style={{ fontFamily: "Space Grotesk", fontSize: 22, letterSpacing: "-0.01em" }}>Supernova</span>
        <span className="text-white/25">/</span>
        <span>{section}</span>
      </div>
      <div className="absolute top-14 right-20 slide-chrome slide-in" style={{ animationDelay: "0.05s" }}>
        <span className="text-white/70" style={{ fontFamily: "Space Grotesk" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-white/25 mx-2">/</span>
        <span>{String(total).padStart(2, "0")}</span>
      </div>
      <div className="absolute bottom-14 left-20 slide-chrome slide-in">
        Backblaze Generative Media Hackathon · 2026
      </div>
      <div className="absolute bottom-14 right-20 slide-chrome slide-in flex items-center gap-3">
        <span>Use </span>
        <kbd className="glass-pill" style={{ padding: "4px 10px", fontFamily: "Space Grotesk", fontSize: 14 }}>←</kbd>
        <kbd className="glass-pill" style={{ padding: "4px 10px", fontFamily: "Space Grotesk", fontSize: 14 }}>→</kbd>
        <span>to navigate</span>
      </div>
    </>
  );
}

export function Chip({ children, dot = true }: { children: ReactNode; dot?: boolean }) {
  return (
    <span className="chip">
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <div className="slide-kicker">{children}</div>;
}

// Re-export SupernovaMark for backwards compatibility
export { SupernovaMark };
