import { SlideBackdrop, SlideChrome, Kicker } from "./parts";

const steps = [
  { name: "Paste URL",        note: "Input" },
  { name: "Jina AI",          note: "Extracts product data" },
  { name: "GenBlaze",         note: "Orchestrates every AI workflow" },
  { name: "OpenRouter",       note: "Routes to the best AI model" },
  { name: "Market Intel",     note: "Competitive + audience insights" },
  { name: "Image Generation", note: "On-brand visuals" },
  { name: "Video Rendering",  note: "Cinematic product cuts" },
  { name: "Backblaze B2",     note: "Storage · versioning · retrieval" },
  { name: "Share",            note: "Publish anywhere" },
];

export function Slide3How({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="default" />
      <SlideChrome index={index} total={total} section="How It Works" />

      <div className="absolute inset-0 flex flex-col px-32 pt-48 pb-32">
        <div className="slide-in"><Kicker>Pipeline</Kicker></div>
        <h2 className="slide-title mt-8 slide-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-cream">How </span>
          <span className="text-warm-gradient">Supernova</span>
          <span className="text-cream"> works.</span>
        </h2>

        {/* 3 x 3 pipeline grid with warm connectors */}
        <div className="mt-14 grid grid-cols-3 gap-x-10 gap-y-8 slide-in" style={{ animationDelay: "0.25s" }}>
          {steps.map((s, i) => {
            const isHighlight = ["GenBlaze", "Backblaze B2"].includes(s.name);
            return (
              <div key={s.name} className="relative">
                <div
                  className="glass p-8 h-full"
                  style={{
                    borderColor: isHighlight ? "rgba(255,218,185,0.3)" : undefined,
                    background: isHighlight
                      ? "linear-gradient(135deg, rgba(139,90,43,0.22), rgba(255,255,255,0.04))"
                      : undefined,
                    minHeight: 140,
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      style={{
                        fontFamily: "Space Grotesk",
                        fontSize: 20,
                        color: "rgba(255,218,185,0.75)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="slide-chrome" style={{ color: isHighlight ? "#FFDAB9" : undefined }}>
                      {isHighlight ? "core" : "step"}
                    </span>
                  </div>
                  <div
                    className="mt-4"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: 40,
                      letterSpacing: "-0.03em",
                      color: "#FFF",
                    }}
                  >
                    {s.name}
                  </div>
                  <div className="slide-caption mt-3">{s.note}</div>
                </div>
                {/* connector line to next */}
                {i % 3 !== 2 && i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 w-8 h-px" style={{ background: "linear-gradient(90deg, rgba(255,218,185,0.6), transparent)" }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
