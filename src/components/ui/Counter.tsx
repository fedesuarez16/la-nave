"use client";

import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

export function Counter({ value, className = "" }: { value: number; className?: string }) {
  const { ref, inView } = useInView<HTMLElement>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setCurrent(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <strong ref={ref} className={`font-normal ${className}`}>
      {current}
    </strong>
  );
}
