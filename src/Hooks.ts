import { useState, useEffect, useRef, useCallback } from "react";

// ── Scroll reveal hook ──
export function useSR(delay = 0, from = "up") {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const tr: Record<string, string> = {
    up:    "translateY(40px)",
    left:  "translateX(-50px)",
    right: "translateX(50px)",
    scale: "scale(0.92)",
  };

  return [
    ref,
    {
      opacity:    v ? 1 : 0,
      transform:  v ? "none" : (tr[from] || tr.up),
      transition: `opacity .8s ${delay}s cubic-bezier(.22,1,.36,1), transform .8s ${delay}s cubic-bezier(.22,1,.36,1)`,
    } as React.CSSProperties,
  ] as const;
}

// ── Magnetic button hook ──
export function useMagnet() {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px) scale(1.04)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}