import { SlideBackdrop, SlideChrome, Chip, Kicker, SupernovaMark } from "./parts";

const stack = ["Backblaze B2", "GenBlaze", "OpenRouter", "Next.js"];
const pipeline = ["URL", "Research", "Copy", "Market Intel", "Images", "Video", "Publish"];

export function Slide1Hero({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="hero" />
      <SlideChrome index={index} total={total} section="Introducing" />

      <div className="absolute inset-0 flex flex-col px-32 pt-48 pb-32">
        <div className="slide-in" style={{ animationDelay: "0.1s" }}>
          <Kicker>Supernova · The AI Marketing Agent</Kicker>
        </div>

        <h1 className="slide-title mt-6 max-w-[1100px] slide-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-cream">Turn Any Product URL</span>
          <br />
          <span className="text-warm-gradient">Into a Marketing Campaign.</span>
        </h1>

        <p className="slide-subtitle mt-8 max-w-[1200px] slide-in" style={{ animationDelay: "0.35s" }}>
          Supernova transforms any product URL into AI-powered videos, images,
          marketing copy, and market intelligence — in minutes, not weeks.
        </p>

        {/* Pipeline strip */}
        <div className="mt-10 slide-in" style={{ animationDelay: "0.5s" }}>
          <div className="glass px-10 py-8 flex items-center gap-6 w-fit">
            {pipeline.map((s, i) => (
              <div key={s} className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: 10, height: 10,
                      background: i === 0 ? "#FFDAB9" : "rgba(255,218,185,0.35)",
                      boxShadow: i === 0 ? "0 0 12px #FFDAB9" : "none",
                    }}
                  />
                  <span style={{ fontFamily: "Space Grotesk", fontSize: 26, letterSpacing: "-0.01em", color: i === 0 ? "#FFDAB9" : "rgba(255,255,255,0.85)" }}>
                    {s}
                  </span>
                </div>
                {i < pipeline.length - 1 && <span className="text-white/25 text-3xl">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Built with */}
        <div className="mt-8 flex items-center gap-6 slide-in" style={{ animationDelay: "0.65s" }}>
          <span className="slide-caption">Built with</span>
          <div className="divider-warm w-24" />
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>

      {/* Floating dashboard mockup */}
      <div className="absolute float-slow" style={{ right: -40, top: 340, width: 540 }}>
        <div className="glass-strong p-6" style={{ borderRadius: 32 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="ml-4 slide-chrome">supernova.app / studio</span>
          </div>
          <div className="rounded-2xl p-5" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-3">
              <SupernovaMark size={18} />
              <span style={{ fontFamily: "Space Grotesk", fontSize: 20 }}>Paste product URL</span>
            </div>
            <div className="mt-4 rounded-xl px-5 py-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "Space Grotesk", fontSize: 22, color: "#FFDAB9" }}>
              https://acme.com/products/atlas-vault
            </div>
            <button className="mt-4 w-full rounded-xl py-4" style={{ background: "linear-gradient(135deg,#8B5A2B,#5C3317)", color: "#FFDAB9", fontFamily: "Space Grotesk", fontSize: 22, boxShadow: "0 20px 40px -20px rgba(139,90,43,0.7)" }}>
              Generate campaign →
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {["Video", "Images", "Copy"].map((t) => (
              <div key={t} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="slide-chrome" style={{ color: "#FFDAB9" }}>{t}</div>
                <div className="mt-2 slide-caption">Generating…</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
