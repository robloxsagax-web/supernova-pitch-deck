import { SlideBackdrop, SlideChrome, Kicker } from "./parts";

const trad = ["Agency", "Designer", "Copywriter", "Researcher", "Video Editor"];
const tradFlow = ["Research", "Copy", "Design", "Video", "Publish"];
const novaFlow = ["Paste URL", "One AI Workflow", "Complete"];

export function Slide2Problem({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="dim" />
      <SlideChrome index={index} total={total} section="The Problem" />

      <div className="absolute inset-0 flex flex-col px-32 pt-48 pb-32">
        <div className="slide-in"><Kicker>The Problem</Kicker></div>
        <h2 className="slide-title mt-8 slide-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-cream">Marketing is </span>
          <span className="text-warm-gradient">still broken.</span>
        </h2>

        <div className="grid grid-cols-2 gap-10 mt-12 slide-in" style={{ animationDelay: "0.25s" }}>
          {/* Traditional */}
          <div className="glass p-14" style={{ minHeight: 420 }}>
            <div className="flex items-center justify-between">
              <span className="slide-kicker" style={{ color: "rgba(255,255,255,0.5)" }}>Traditional</span>
              <span className="slide-chrome">Weeks · $10,000+</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {trad.map((t) => (
                <span key={t} className="chip" style={{ fontSize: 22 }}>
                  <span className="dot" style={{ background: "rgba(255,255,255,0.3)", boxShadow: "none" }} />
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10 divider-warm" />
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              {tradFlow.map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span style={{ fontFamily: "Space Grotesk", fontSize: 26, color: "rgba(255,255,255,0.55)" }}>{s}</span>
                  {i < tradFlow.length - 1 && <span className="text-white/20 text-2xl">→</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Supernova */}
          <div
            className="glass-strong p-14 relative overflow-hidden"
            style={{
              minHeight: 420,
              background: "linear-gradient(135deg, rgba(139,90,43,0.22), rgba(255,218,185,0.06))",
              borderColor: "rgba(255,218,185,0.25)",
            }}
          >
            <div className="glow-warm" style={{ width: 400, height: 400, background: "#8B5A2B", top: -100, right: -100, opacity: 0.5 }} />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="slide-kicker">Supernova</span>
                <span className="slide-chrome" style={{ color: "#FFDAB9" }}>2 minutes · $0</span>
              </div>
              <div className="mt-8 space-y-5">
                {novaFlow.map((s, i) => (
                  <div key={s} className="flex items-center gap-5">
                    <div className="rounded-full flex items-center justify-center"
                      style={{ width: 44, height: 44, background: "rgba(255,218,185,0.14)", border: "1px solid rgba(255,218,185,0.3)", fontFamily: "Space Grotesk", color: "#FFDAB9", fontSize: 22 }}>
                      {i + 1}
                    </div>
                    <span style={{ fontFamily: "Space Grotesk", fontSize: 34, color: "#FFF", letterSpacing: "-0.02em" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 divider-warm" />
              <div className="mt-6 slide-body-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
                One workflow. Every asset. Instantly.
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
