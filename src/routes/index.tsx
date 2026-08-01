import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ScaledSlide } from "@/components/slides/ScaledSlide";
import { Slide1Hero } from "@/components/slides/Slide1Hero";
import { Slide2Problem } from "@/components/slides/Slide2Problem";
import { Slide3How } from "@/components/slides/Slide3How";
import { Slide4Architecture } from "@/components/slides/Slide4Architecture";
import { Slide5Why } from "@/components/slides/Slide5Why";
import { Slide6Product } from "@/components/slides/Slide6Product";
import { Slide7Closing } from "@/components/slides/Slide7Closing";

export const Route = createFileRoute("/")({
  component: Index,
});

const slides = [
  Slide1Hero,
  Slide2Problem,
  Slide3How,
  Slide4Architecture,
  Slide5Why,
  Slide6Product,
  Slide7Closing,
];

function Index() {
  const [i, setI] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (n: number) => setI(() => Math.max(0, Math.min(total - 1, n))),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        setI((v) => Math.min(total - 1, v + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setI((v) => Math.max(0, v - 1));
      } else if (e.key === "Home") {
        setI(0);
      } else if (e.key === "End") {
        setI(total - 1);
      } else if (/^[1-9]$/.test(e.key)) {
        const n = parseInt(e.key, 10) - 1;
        if (n < total) setI(n);
      } else if (e.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  useEffect(() => {
    document.title = `${i + 1}/${total} — Supernova`;
  }, [i, total]);

  const Slide = slides[i];

  return (
    <main className="fixed inset-0 bg-background overflow-hidden">
      <ScaledSlide key={i}>
        <Slide index={i} total={total} />
      </ScaledSlide>

      {/* Nav dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 glass-pill px-4 py-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => go(idx)}
            className={`nav-dot ${idx === i ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Prev / next side hit areas */}
      <button
        aria-label="Previous slide"
        onClick={() => go(i - 1)}
        className="fixed left-0 top-0 h-full w-24 z-40 opacity-0 cursor-pointer"
      />
      <button
        aria-label="Next slide"
        onClick={() => go(i + 1)}
        className="fixed right-0 top-0 h-full w-24 z-40 opacity-0 cursor-pointer"
      />
    </main>
  );
}
