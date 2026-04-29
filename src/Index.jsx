import { useState, useEffect, useRef, useCallback } from "react";
import { C } from "../constants";
import logo from "../assets/images/Easygoldlogo.webp.jpeg";

// ─── Logo ──────────────────────────────────────────────────
export const Logo = ({ s = 40 }) => (
  <img
    src={logo}
    alt="Easy Gold Logo"
    style={{ width: s, height: s, objectFit: "contain", display: "block" }}
  />
);

// ─── Gold Particles ────────────────────────────────────────
export function GoldParticles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);
    let animId;
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      alpha: Math.random(),
      dAlpha: (Math.random() - 0.5) * 0.008,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.dAlpha;
        if (p.alpha <= 0 || p.alpha >= 1) p.dAlpha *= -1;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha * 0.5})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
    />
  );
}

// ─── Scroll Reveal Hook ────────────────────────────────────
export function useSR(delay = 0, from = "up") {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const tr = { up: "translateY(40px)", left: "translateX(-50px)", right: "translateX(50px)", scale: "scale(0.92)" };
  return [ref, {
    opacity: v ? 1 : 0,
    transform: v ? "none" : (tr[from] || tr.up),
    transition: `opacity .8s ${delay}s cubic-bezier(.22,1,.36,1), transform .8s ${delay}s cubic-bezier(.22,1,.36,1)`,
  }];
}

// ─── Magnetic Button ───────────────────────────────────────
export function MagBtn({ children, className, style, onClick, href, target }) {
  const ref = useRef(null);
  const handleMouseMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px) scale(1.04)`;
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);
  const props = {
    ref, className,
    style: { ...style, transition: "transform .4s cubic-bezier(.22,1,.36,1), background .25s, box-shadow .25s" },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
  if (href) return <a href={href} target={target} rel="noopener noreferrer" {...props}>{children}</a>;
  return <button onClick={onClick} {...props}>{children}</button>;
}

// ─── Typed Text ────────────────────────────────────────────
export function TypedText({ texts, speed = 80, pause = 2200 }) {
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = texts[idx];
    if (!del && char < current.length) {
      const t = setTimeout(() => setChar((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    if (!del && char === current.length) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && char > 0) {
      const t = setTimeout(() => setChar((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    }
    if (del && char === 0) {
      setDel(false);
      setIdx((i) => (i + 1) % texts.length);
    }
  }, [char, del, idx, texts, speed, pause]);
  return (
    <span>
      {texts[idx].slice(0, char)}
      <span style={{
        display: "inline-block", width: 2, height: "1em", background: C.al,
        marginLeft: 2, verticalAlign: "text-bottom", animation: "blink .8s step-end infinite",
      }} />
    </span>
  );
}

// ─── Tilt Card ─────────────────────────────────────────────
export function TiltCard({ children, style, className }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
  };
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateZ(0)";
  };
  return (
    <div ref={ref} className={className}
      style={{ ...style, transition: "transform .5s cubic-bezier(.22,1,.36,1)", willChange: "transform" }}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}

// ─── Floating Label Input ──────────────────────────────────
export function FloatInput({ label, type = "text", value, onChange, multiline }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;
  const base = {
    width: "100%", padding: "22px 16px 8px",
    border: `1px solid ${active ? C.au : "rgba(201,168,76,.18)"}`,
    borderRadius: 6, background: "rgba(255,255,255,.04)", color: C.w,
    fontSize: 14, fontFamily: "inherit", outline: "none", resize: "vertical",
    transition: "border-color .2s, background .2s", boxSizing: "border-box",
  };
  return (
    <div style={{ position: "relative", marginBottom: 20 }}>
      <label style={{
        position: "absolute", left: 16, top: active ? 8 : 18,
        fontSize: active ? 9 : 13, letterSpacing: active ? 2 : 0,
        color: active ? C.au : "rgba(255,255,255,.25)",
        textTransform: active ? "uppercase" : "none",
        transition: "all .22s cubic-bezier(.22,1,.36,1)",
        pointerEvents: "none", fontWeight: active ? 700 : 400,
      }}>{label}</label>
      {multiline
        ? <textarea rows={3} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={base} />
        : <input type={type} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={base} />
      }
    </div>
  );
}