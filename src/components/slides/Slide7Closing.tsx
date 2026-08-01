import { SlideBackdrop, SlideChrome, Kicker, SupernovaMark } from "./parts";

const stack = ["GenBlaze", "Backblaze B2", "OpenRouter", "Next.js", "FastAPI"];

export function Slide7Closing({ index, total }: { index: number; total: number }) {
  return (
    <>
      <SlideBackdrop variant="hero" />
      <SlideChrome index={index} total={total} section="Closing" />

      <div className="absolute inset-0 flex flex-col items-center text-center px-32 pt-52 pb-32">
        <div className="slide-in"><Kicker>The Future of Marketing</Kicker></div>

        <h1
          className="slide-title-lg mt-10 max-w-[1600px] slide-in"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="text-cream">Marketing shouldn't take weeks.</span>
          <br />
          <span className="text-warm-gradient">It should take minutes.</span>
        </h1>

        <div className="mt-20 flex flex-col items-center gap-5 slide-in" style={{ animationDelay: "0.35s" }}>
          <div className="flex items-center gap-5">
            <SupernovaMark size={56} />
            <span style={{ fontFamily: "Space Grotesk", fontSize: 84, letterSpacing: "-0.045em", fontWeight: 600 }} className="text-cream">
              Supernova
            </span>
          </div>
          <div className="slide-subtitle">The AI Marketing Agent</div>
        </div>

        <div className="mt-20 slide-in" style={{ animationDelay: "0.55s" }}>
          <div className="slide-caption mb-5">Built with</div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {stack.map((s) => (
              <span key={s} className="chip" style={{ fontSize: 22 }}>
                <span style={{ color: "#FFDAB9", fontFamily: "Space Grotesk" }}>✓</span>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-24 slide-in" style={{ animationDelay: "0.75s" }}>
          <div style={{ fontFamily: "Space Grotesk", fontSize: 52, letterSpacing: "-0.03em" }} className="text-warm-gradient">
            Thank you.
          </div>
          <div className="slide-subtitle mt-3">Questions?</div>
        </div>
      </div>
    </>
  );
}
