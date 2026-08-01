import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScaledSlide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();
      const s = Math.min(width / 1920, height / 1080);
      setScale(s);
    };
    update();
    const ro = new ResizeObserver(update);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="slide-stage w-full h-full">
      <div className="slide-wrapper" style={{ ["--scale" as string]: scale }}>
        <div className="slide-content">{children}</div>
      </div>
    </div>
  );
}
