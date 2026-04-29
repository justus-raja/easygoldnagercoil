import { TrendingUp, Zap, ShieldCheck, BadgeCheck, Users, Award, MapPin, Star } from "lucide-react";
import { C } from "../Constants";

const ITEMS = [
  { icon: <TrendingUp size={13} />, t: "Live Market Pricing" },
  { icon: <Zap size={13} />,        t: "Same-Day Payment" },
  { icon: <ShieldCheck size={13} />,t: "100% Transparent" },
  { icon: <BadgeCheck size={13} />, t: "XRF Certified Testing" },
  { icon: <Users size={13} />,      t: "50,000+ Happy Clients" },
  { icon: <Award size={13} />,      t: "15+ Years Experience" },
  { icon: <MapPin size={13} />,     t: "Nagercoil Branch" },
  { icon: <Star size={13} />,       t: "4.9 Rating" },
];

export default function Marquee() {
  return (
    <div
      style={{
        background: C.g2,
        borderBottom: `1px solid rgba(201,168,76,.1)`,
        overflow: "hidden",
        borderTop: `1px solid rgba(201,168,76,.08)`,
      }}
    >
      <div style={{ display: "flex", animation: "marquee 28s linear infinite", whiteSpace: "nowrap" }}>
        {[...Array(2)].map((_, ri) => (
          <div key={ri} style={{ display: "flex" }}>
            {ITEMS.map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 28px",
                  borderRight: `1px solid rgba(201,168,76,.07)`,
                  flexShrink: 0,
                }}
              >
                <span style={{ color: C.al, opacity: 0.6 }}>{f.icon}</span>
                <span style={{ color: "rgba(255,255,255,.5)", fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
                  {f.t}
                </span>
                <span style={{ color: "rgba(201,168,76,.2)", fontSize: 14, marginLeft: 8 }}>·</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}