import { SlideBackdrop, SlideChrome, Kicker } from "./parts";

function Node({ label, sub, highlight }: { label: string; sub?: string; highlight?: boolean }) {
  return (
    <div
      className="glass px-5 py-3 flex flex-col items-center justify-center text-center"
      style={{
        minWidth: 180,
        borderColor: highlight ? "rgba(255,218,185,0.3)" : undefined,
        background: highlight ? "linear-gradient(135deg, rgba(139,90,43,0.25), rgba(255,255,255,0.04))" : undefined,
      }}
    >
      <div style={{ fontFamily: "Space Grotesk", fontSize: 24, letterSpacing: "-0.02em", color: "#FFF" }}>
        {label}
      </div>
      {sub && <div className="slide-caption mt-1">{sub}</div>}
    </div>
  );
}

function LayerLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontFamily: "Space Grotesk",
        fontSize: 18,
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: "rgba(255,218,185,0.65)",
      }}
    >
      {children}
    </div>
  );
}

function Down() {
  return <div className="w-px h-4 mx-auto" style={{ background: "linear-gradient(180deg, rgba(255,218,185,0.6), transparent)" }} />;
}

export function Slide4Architecture({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="default" />
      <SlideChrome index={index} total={total} section="Architecture" />

      <div className="absolute inset-0 flex flex-col px-32 pt-32 pb-24">
        <div className="slide-in"><Kicker>System Architecture</Kicker></div>
        <h2 className="slide-title mt-4 slide-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-cream">Engineered like </span>
          <span className="text-warm-gradient">a product.</span>
        </h2>

        <div className="mt-6 grid grid-cols-[220px_1fr] gap-10 items-start slide-in" style={{ animationDelay: "0.25s" }}>
          <div className="flex flex-col gap-6 mt-2 pr-4 border-r border-white/10">
            <LayerLabel>Client</LayerLabel>
            <LayerLabel>API</LayerLabel>
            <LayerLabel>Orchestration</LayerLabel>
            <LayerLabel>Models</LayerLabel>
            <LayerLabel>Media</LayerLabel>
            <LayerLabel>Storage</LayerLabel>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Node label="Next.js Frontend" sub="Supernova app" />
            <Down />
            <Node label="FastAPI Backend" sub="Auth · routing · jobs" />
            <Down />
            <Node label="GenBlaze" sub="AI orchestration engine" highlight />
            <Down />

            <div className="grid grid-cols-4 gap-4 w-full max-w-[1000px]">
              <Node label="Qwen" />
              <Node label="Claude" />
              <Node label="DeepSeek" />
              <Node label="Gemini" />
            </div>
            <div className="slide-caption -mt-1">via OpenRouter</div>
            <Down />

            <div className="grid grid-cols-3 gap-4 w-full max-w-[900px]">
              <Node label="Images" />
              <Node label="Video" />
              <Node label="Voice" />
            </div>
            <Down />

            <Node label="Backblaze B2" sub="Campaigns · Assets · Versions · Exports" highlight />
          </div>
        </div>
      </div>
    </>
  );
}
