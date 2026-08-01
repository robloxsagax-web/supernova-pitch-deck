import { SlideBackdrop, SlideChrome, Kicker, SupernovaMark } from "./parts";

const features = [
  { name: "AI Video Studio",     side: "left", top: 40 },
  { name: "Market Intelligence", side: "left", top: 220 },
  { name: "Campaign History",    side: "left", top: 400 },
  { name: "Cloud Storage",       side: "right", top: 40 },
  { name: "Analytics",           side: "right", top: 220 },
  { name: "Brand Themes",        side: "right", top: 400 },
];

export function Slide6Product({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="dim" />
      <SlideChrome index={index} total={total} section="Product" />

      <div className="absolute inset-0 flex flex-col justify-center pt-32 pb-24">
        <div className="px-32 slide-in">
          <Kicker>Product Showcase</Kicker>
          <h2 className="slide-title mt-6" style={{ animationDelay: "0.1s" }}>
            <span className="text-cream">A studio for </span>
            <span className="text-warm-gradient">every campaign.</span>
          </h2>
        </div>

        <div className="relative mt-8 mx-auto" style={{ width: 1720, height: 560 }}>
          {/* Left column feature chips */}
          {features.filter(f => f.side === "left").map((f, i) => (
            <div
              key={f.name}
              className="absolute glass px-6 py-4 float-slow slide-in"
              style={{
                left: 0,
                top: f.top,
                animationDelay: `${0.25 + i * 0.08}s`,
                minWidth: 240,
              }}
            >
              <div className="slide-caption">Feature</div>
              <div style={{ fontFamily: "Space Grotesk", fontSize: 26, letterSpacing: "-0.02em", color: "#FFF" }}>
                {f.name}
              </div>
            </div>
          ))}
          {features.filter(f => f.side === "right").map((f, i) => (
            <div
              key={f.name}
              className="absolute glass px-6 py-4 float-slow slide-in"
              style={{
                right: 0,
                top: f.top,
                animationDelay: `${0.25 + i * 0.08}s`,
                minWidth: 240,
                textAlign: "right",
              }}
            >
              <div className="slide-caption">Feature</div>
              <div style={{ fontFamily: "Space Grotesk", fontSize: 26, letterSpacing: "-0.02em", color: "#FFF" }}>
                {f.name}
              </div>
            </div>
          ))}

          {/* Center dashboard */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 glass-strong p-8" style={{ width: 1000, height: 560, borderRadius: 36 }}>
            <div className="flex items-center gap-3 pb-5 border-b border-white/8">
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <div className="ml-6 flex items-center gap-3">
                <SupernovaMark size={20} />
                <span style={{ fontFamily: "Space Grotesk", fontSize: 22 }}>Supernova Studio</span>
              </div>
              <div className="ml-auto slide-chrome">Campaign · Atlas Vault</div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-6">
              {/* Big video preview */}
              <div className="col-span-2 rounded-2xl relative overflow-hidden" style={{ height: 260, background: "linear-gradient(135deg,#3a1f0d,#8B5A2B 60%,#FFDAB9)" }}>
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 55%)" }} />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="slide-caption" style={{ color: "rgba(255,255,255,0.85)" }}>AI Video Studio</div>
                    <div style={{ fontFamily: "Space Grotesk", fontSize: 32, color: "#FFF" }}>Atlas Vault · Launch Cut</div>
                  </div>
                  <div className="glass-pill px-4 py-2" style={{ color: "#FFDAB9", fontFamily: "Space Grotesk" }}>0:32</div>
                </div>
                <div className="absolute top-5 right-5 glass-pill px-3 py-1 slide-chrome" style={{ color: "#FFDAB9" }}>4K · Rendering</div>
              </div>
              {/* Stats column */}
              <div className="flex flex-col gap-4">
                {[
                  { k: "Campaigns", v: "12" },
                  { k: "Assets", v: "184" },
                  { k: "B2 Stored", v: "3.2 GB" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="slide-caption">{s.k}</div>
                    <div style={{ fontFamily: "Space Grotesk", fontSize: 40, color: "#FFDAB9", letterSpacing: "-0.03em" }}>{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              {["Hero Image","Social Cut","Ad Copy","Insights"].map((t, i) => (
                <div key={t} className="rounded-xl p-4"
                  style={{
                    background: i === 0 ? "linear-gradient(135deg,#8B5A2B,#5C3317)" : "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    height: 88,
                  }}
                >
                  <div className="slide-caption" style={{ color: i === 0 ? "rgba(255,218,185,0.9)" : undefined }}>Asset {i+1}</div>
                  <div style={{ fontFamily: "Space Grotesk", fontSize: 22, marginTop: 8, color: i === 0 ? "#FFDAB9" : "#FFF" }}>{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-32 mt-4 flex items-center gap-6 slide-in" style={{ animationDelay: "0.6s" }}>
          <div className="divider-warm w-32" />
          <p style={{ fontFamily: "Space Grotesk", fontSize: 34, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.9)" }}>
            <span className="text-warm-gradient">"It feels like the future </span>
            <span className="text-white/70">of AI marketing."</span>
          </p>
        </div>
      </div>
    </>
  );
}
