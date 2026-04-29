import { useRef, useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import { C } from "./Constants";
import logo from "../src/assets/images/Easygoldlogo.webp.jpeg";

// ── Logo ──
export const Logo = ({ s = 40 }: { s?: number }) => (
    <img
        src={logo}
        alt="Easy Gold Logo"
        style={{ width: s, height: s, objectFit: "contain", display: "block" }}
    />
);

// ── Magnetic Button ──
interface MagBtnProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    href?: string;
    target?: string;
}
export function MagBtn({ children, className, style, onClick, href, target }: MagBtnProps) {
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

    const commonProps = {
        className,
        style: {
            ...style,
            transition: "transform .4s cubic-bezier(.22,1,.36,1), background .25s, box-shadow .25s",
        } as React.CSSProperties,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
    };

    if (href) {
        return (
            <a
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={href}
                target={target}
                rel="noopener noreferrer"
                {...commonProps}
            >
                {children}
            </a>
        );
    }
    return (
        <button
            ref={ref as React.RefObject<HTMLButtonElement>}
            onClick={onClick}
            {...commonProps}
        >
            {children}
        </button>
    );
}

// ── Typed Text ──
interface TypedTextProps {
    texts: string[];
    speed?: number;
    pause?: number;
}
export function TypedText({ texts, speed = 80, pause = 2200 }: TypedTextProps) {
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
            <span
                style={{
                    display: "inline-block",
                    width: 2,
                    height: "1em",
                    background: C.al,
                    marginLeft: 2,
                    verticalAlign: "text-bottom",
                    animation: "blink .8s step-end infinite",
                }}
            />
        </span>
    );
}

// ── Counter ──
interface CounterProps {
    to: number;
    suffix?: string;
    duration?: number;
}
export function Counter({ to, suffix = "", duration = 2000 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [val, setVal] = useState(0);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    obs.disconnect();
                    const start = performance.now();
                    const tick = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        setVal(Math.floor(p * to));
                        if (p < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [to, duration]);

    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

// ── Floating Label Input ──
interface FloatInputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    multiline?: boolean;
}
export function FloatInput({ label, type = "text", value, onChange, multiline }: FloatInputProps) {
    const [focused, setFocused] = useState(false);
    const active = focused || value;

    const base: React.CSSProperties = {
        width: "100%",
        padding: "22px 16px 8px",
        border: `1px solid ${active ? C.au : "rgba(201,168,76,.18)"}`,
        borderRadius: 6,
        background: "rgba(255,255,255,.04)",
        color: C.w,
        fontSize: 14,
        fontFamily: "inherit",
        outline: "none",
        resize: "vertical",
        transition: "border-color .2s, background .2s",
        boxSizing: "border-box",
    };

    return (
        <div style={{ position: "relative", marginBottom: 20 }}>
            <label
                style={{
                    position: "absolute",
                    left: 16,
                    top: active ? 8 : 18,
                    fontSize: active ? 9 : 13,
                    letterSpacing: active ? 2 : 0,
                    color: active ? C.au : "rgba(255,255,255,.25)",
                    textTransform: active ? "uppercase" : "none",
                    transition: "all .22s cubic-bezier(.22,1,.36,1)",
                    pointerEvents: "none",
                    fontWeight: active ? 700 : 400,
                }}
            >
                {label}
            </label>
            {multiline ? (
                <textarea
                    rows={3}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={base}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={base}
                />
            )}
        </div>
    );
}

// ── Tilt Card ──
interface TiltCardProps {
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
}
export function TiltCard({ children, style, className }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
    };

    const handleMouseLeave = () => {
        if (ref.current)
            ref.current.style.transform =
                "perspective(800px) rotateY(0) rotateX(0) translateZ(0)";
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                transition: "transform .5s cubic-bezier(.22,1,.36,1)",
                willChange: "transform",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    );
}

// ── Gold Particles Canvas ──
export function GoldParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d")!;
        let W = (canvas.width = canvas.offsetWidth);
        let H = (canvas.height = canvas.offsetHeight);
        let animId: number;

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
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1,
            }}
        />
    );
}