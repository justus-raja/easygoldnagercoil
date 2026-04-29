import { useRef, type JSX } from "react";
import { TrendingUp, Landmark, Award, Coins, Gem, FlaskConical, ArrowRight } from "lucide-react";
import { C, SERVICES, wa } from "../Constants";
import { useSR } from "../Hooks";

const ICON_MAP: Record<string, JSX.Element> = {
  TrendingUp:   <TrendingUp size={22} />,
  Landmark:     <Landmark size={22} />,
  Award:        <Award size={22} />,
  Coins:        <Coins size={22} />,
  Gem:          <Gem size={22} />,
  FlaskConical: <FlaskConical size={22} />,
};

function SvcCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const [ref, style] = useSR(i * 0.07);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div ref={ref} style={style}>
      <div ref={cardRef} className="svc-card" onMouseMove={handleMouseMove}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div className="svc-icon">{ICON_MAP[s.icon]}</div>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 700, color: "rgba(13,59,13,.06)", lineHeight: 1 }}>
            {s.num}
          </span>
        </div>
        <h3 style={{ fontSize: 18, color: C.g1, fontWeight: 700, fontFamily: "'Cormorant Garamond',serif", marginBottom: 10 }}>
          {s.t}
        </h3>
        <p style={{ fontSize: 13, color: C.gy, lineHeight: 1.85 }}>{s.d}</p>
        <a
          href={wa(`Hi! I'm interested in ${s.t}.`)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginTop: 18,
            fontSize: 11,
            fontWeight: 700,
            color: C.g4,
            textDecoration: "none",
            letterSpacing: 1,
            textTransform: "uppercase",
            transition: "gap .2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.gap = "10px")}
          onMouseOut={(e) => (e.currentTarget.style.gap = "5px")}
        >
          Enquire <ArrowRight size={11} />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [sr, s] = useSR(0);

  return (
    <section id="services" style={{ padding: "88px 56px", background: C.of }} className="diag-bg">
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div ref={sr} style={s}>
          <div style={{ marginBottom: 52 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: `linear-gradient(90deg,${C.au},transparent)` }} />
              <p style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>What We Offer</p>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(30px,3.5vw,52px)", color: C.g1, fontWeight: 700, lineHeight: 1.05, maxWidth: 480 }}>
              Our Gold <em style={{ color: C.g4, fontStyle: "italic" }}>Services</em>
            </h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="services-grid">
          {SERVICES.map((s, i) => (
            <SvcCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}