import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { C, NAV_LINKS, scrollTo, wa } from "../Constants";
import { Logo, MagBtn } from "../Ui";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (id: string) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: scrolled ? "rgba(6,18,6,.97)" : "rgba(6,18,6,.78)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid rgba(201,168,76,${scrolled ? 0.2 : 0.06})`,
          padding: `${scrolled ? 12 : 18}px 56px`,
          transition: "all .4s cubic-bezier(.22,1,.36,1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => nav("home")}
          style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div style={{ animation: "pulse 3s ease-in-out infinite, float 6s ease-in-out infinite" }}>
            <Logo s={40} />
          </div>
          <div>
            <div style={{ color: C.al, fontSize: 18, fontWeight: 700, letterSpacing: 2.5, fontFamily: "'Cormorant Garamond',serif", lineHeight: 1 }}>
              EASY GOLD
            </div>
            <div style={{ color: "rgba(201,168,76,.38)", fontSize: 8, letterSpacing: 4, textTransform: "uppercase", fontWeight: 600 }}>
              Premium Gold Services
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => nav(l.id)}
              className={`nl ${activeSection === l.id ? "nl-active" : ""}`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="desktop-nav" style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <MagBtn
            href={wa()}
            target="_blank"
            style={{ display: "flex", alignItems: "center", gap: 6, color: C.al, fontSize: 12, fontWeight: 600, textDecoration: "none", letterSpacing: 0.4 }}
          >
            <MessageCircle size={14} /> WhatsApp
          </MagBtn>
          <MagBtn href="tel:+919677554768" className="btn-gold" style={{ padding: "8px 18px", fontSize: 12, borderRadius: 3 }}>
            <Phone size={13} /> 96775 54768
          </MagBtn>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", color: C.al, cursor: "pointer", padding: 4 }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9990,
            background: "rgba(6,18,6,.99)",
            padding: "80px 32px 32px",
            display: "flex",
            flexDirection: "column",
            animation: "slideInUp .35s cubic-bezier(.22,1,.36,1)",
          }}
        >
          {NAV_LINKS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => nav(l.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: activeSection === l.id ? C.al : "rgba(255,255,255,.7)",
                fontSize: 22,
                fontWeight: 600,
                fontFamily: "inherit",
                textAlign: "left",
                padding: "14px 0",
                borderBottom: `1px solid rgba(201,168,76,.08)`,
                animation: `revealLeft .4s ${i * 0.05}s both`,
              }}
            >
              {l.label}
            </button>
          ))}
          <MagBtn href="tel:+919677554768" className="btn-gold" style={{ marginTop: 24, justifyContent: "center" }}>
            <Phone size={16} /> Call Now
          </MagBtn>
        </div>
      )}
    </>
  );
}