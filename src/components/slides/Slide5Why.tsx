import { SlideBackdrop, SlideChrome, Kicker } from "./parts";

const cards = [
  {
    kicker: "01 · Orchestration",
    title: "AI Orchestration",
    body: "GenBlaze intelligently coordinates multiple AI models for script generation, market research, image creation, and video production — one workflow, many minds.",
  },
  {
    kicker: "02 · Engineering",
    title: "Production Ready",
    body: "Built with scalable architecture, optimized workflows, secure authentication, and enterprise-grade cloud storage. Not a demo. A platform.",
  },
  {
    kicker: "03 · Storage",
    title: "Backblaze B2 Integration",
    body: "Every generated asset is automatically stored, versioned, organized, and instantly retrievable — durable object storage at hackathon speed.",
  },
];

export function Slide5Why({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="default" />
      <SlideChrome index={index} total={total} section="Why It Wins" />

      <div className="absolute inset-0 flex flex-col px-32 pt-48 pb-32">
        <div className="slide-in"><Kicker>Why it wins</Kicker></div>
        <h2 className="slide-title mt-8 slide-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-cream">Three reasons </span>
          <span className="text-warm-gradient">Supernova wins.</span>
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-14 slide-in" style={{ animationDelay: "0.25s" }}>
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="glass p-12 relative overflow-hidden"
              style={{ minHeight: 400 }}
            >
              <div
                className="glow-warm"
                style={{
                  width: 340, height: 340,
                  background: "#8B5A2B",
                  top: -140, right: -140,
                  opacity: 0.28 + i * 0.06,
                }}
              />
              <div className="relative">
                <div className="slide-kicker">{c.kicker}</div>
                <div
                  className="mt-8"
                  style={{
                    fontFamily: "Space Grotesk",
                    fontSize: 44,
                    lineHeight: 1.05,
                    letterSpacing: "-0.035em",
                    color: "#FFF",
                  }}
                >
                  {c.title}
                </div>
                <div className="mt-8 slide-body">{c.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-6 slide-in" style={{ animationDelay: "0.5s" }}>
          <div className="divider-warm w-40" />
          <p style={{ fontFamily: "Space Grotesk", fontSize: 38, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.92)" }}>
            <span className="text-warm-gradient">"Built for real businesses,</span>
            <span className="text-white/70"> not just hackathon demos."</span>
          </p>
        </div>
      </div>
    </>
  );
}
