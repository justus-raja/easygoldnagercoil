import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { C, NAV_LINKS, scrollTo, wa } from "../Constants";
import { Logo, MagBtn } from "../Ui";

export default function Footer() {
  const nav = (id: string) => scrollTo(id);

  return (
    <footer style={{ background: C.g1, borderTop: `1px solid rgba(201,168,76,.1)` }}>
      <div
        style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 56px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1.4fr", gap: 44 }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <button
            onClick={() => nav("home")}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div style={{ animation: "pulse 3s ease-in-out infinite" }}>
              <Logo s={38} />
            </div>
            <div>
              <div style={{ color: C.al, fontSize: 17, fontWeight: 700, fontFamily: "'Cormorant Garamond',serif" }}>Easy Gold</div>
              <div style={{ color: "rgba(201,168,76,.32)", fontSize: 8, letterSpacing: 3.5, textTransform: "uppercase" }}>Premium Gold Services</div>
            </div>
          </button>
          <p style={{ color: "rgba(255,255,255,.28)", fontSize: 13, lineHeight: 1.85, marginBottom: 20, maxWidth: 260 }}>
            Easy Gold Nagercoil — quick, safe, and transparent way to sell your old gold at the best market rates.
          </p>
          <div style={{ display: "flex", gap: 7 }}>
            {[<Facebook size={13} />, <Instagram size={13} />, <Twitter size={13} />, <Youtube size={13} />].map((ic, i) => (
              <a key={i} href="#" className="soc">{ic}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: C.au, fontSize: 9, fontWeight: 700, letterSpacing: 3.5, textTransform: "uppercase", marginBottom: 18 }}>
            Quick Links
          </h4>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => nav(l.id)} className="flink">
              <span style={{ color: C.au, opacity: 0.3 }}>›</span> {l.label}
            </button>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: C.au, fontSize: 9, fontWeight: 700, letterSpacing: 3.5, textTransform: "uppercase", marginBottom: 18 }}>
            Contact Us
          </h4>
          {[
            { ic: <Mail size={11} color={C.au} />,   t: "info@easygold.com" },
            { ic: <Phone size={11} color={C.au} />,  t: "+91 96775 54768" },
            { ic: <MapPin size={11} color={C.au} />, t: "54/1, SLB School Opposite, Court Road, Nagercoil" },
          ].map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 13, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 2,
                  border: `1px solid rgba(201,168,76,.12)`,
                  background: "rgba(201,168,76,.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {c.ic}
              </div>
              <span style={{ color: "rgba(255,255,255,.3)", fontSize: 12, lineHeight: 1.65 }}>{c.t}</span>
            </div>
          ))}
          <MagBtn
            href={wa()}
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#25D366",
              color: C.w,
              padding: "8px 14px",
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 11,
              textDecoration: "none",
              marginTop: 6,
              letterSpacing: 0.6,
              textTransform: "uppercase",
            }}
          >
            <MessageCircle size={11} /> WhatsApp
          </MagBtn>
        </div>
      </div>

      <div className="gold-line" />
      <div style={{ padding: "14px 56px", textAlign: "center" }}>
        <span style={{ color: "rgba(255,255,255,.18)", fontSize: 12, letterSpacing: 0.5 }}>
          © 2025 Easy Gold · All Rights Reserved · Nagercoil, Tamil Nadu
        </span>
      </div>
    </footer>
  );
}