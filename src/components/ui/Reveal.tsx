"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  delay?: number;
  className?: string;
};

export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-1000 ease-cine motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
