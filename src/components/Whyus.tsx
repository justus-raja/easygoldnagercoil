import { Zap, TrendingUp, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { C, WHY, scrollTo } from "../Constants";
import { useSR } from "../Hooks";
import { MagBtn } from "../Ui";
import type { JSX } from "react";
import img from '../assets/images/jewels.jpeg';

const ICON_MAP: Record<string, JSX.Element> = {
  Zap:        <Zap size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  ShieldCheck:<ShieldCheck size={20} />,
  Users:      <Users size={20} />,
};

function WhyCard({ w, i }: { w: typeof WHY[0]; i: number }) {
  const [ref, style] = useSR(i * 0.08, i % 2 === 0 ? "left" : "right");
  return (
    <div ref={ref} style={style}>
      <div className="why-card" style={{ transition: "all .3s" }}>
        <div className="why-icon">{ICON_MAP[w.icon]}</div>
        <div>
          <h3 style={{ fontSize: 19, color: C.g1, fontWeight: 700, fontFamily: "'Cormorant Garamond',serif", marginBottom: 8 }}>
            {w.t}
          </h3>
          <p style={{ fontSize: 14, color: C.gy, lineHeight: 1.9 }}>{w.d}</p>
        </div>
      </div>
    </div>
  );
}

export default function Whyus() {
  const [sr, s] = useSR(0);
  const [sr2, s2] = useSR(0.1);
  const [sr3, s3] = useSR(0.05);

  return (
    <section id="why" style={{ padding: "88px 56px", background: C.w }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div ref={sr} style={s}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: C.au }} />
              <p style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>Our Advantage</p>
              <div style={{ width: 32, height: 1, background: C.au }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3.5vw,52px)", color: C.g1, fontWeight: 700, lineHeight: 1.05, marginBottom: 14 }}>
              Why Thousands <em style={{ color: C.g4, fontStyle: "italic" }}>Choose</em> Easy Gold
            </h2>
            <p style={{ fontSize: 14, color: C.gy, maxWidth: 560, margin: "0 auto", lineHeight: 1.9 }}>
              Easy Gold Nagercoil is built on trust, transparency, and customer-first values.
            </p>
          </div>
        </div>

        {/* Two-column layout: Image + Cards */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: 48, 
          alignItems: "center" 
        }}>
          {/* Image Section */}
          <div ref={sr3} style={s3}>
            <div style={{ 
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 24px 48px rgba(0,0,0,0.12)"
            }}>
              <img 
                src={img} 
                alt="Premium gold jewellery collection" 
                style={{ 
                  width: "100%", 
                  height: 480,
                  objectFit: "cover",
                  display: "block"
                }} 
              />
              {/* Gold accent border */}
              <div style={{
                position: "absolute",
                inset: 0,
                border: `3px solid ${C.au}`,
                borderRadius: 12,
                pointerEvents: "none"
              }} />
            </div>
          </div>

          {/* Cards Section */}
          <div style={{ display: "grid", gap: 18 }}>
            {WHY.map((w, i) => (
              <WhyCard key={i} w={w} i={i} />
            ))}
          </div>
        </div>

        <div ref={sr2} style={{ ...s2, textAlign: "center", marginTop: 48 }}>
          <MagBtn onClick={() => scrollTo("contact")} className="btn-gold">
            Get Free Quote <ArrowRight size={14} />
          </MagBtn>
        </div>
      </div>
    </section>
  );
}
