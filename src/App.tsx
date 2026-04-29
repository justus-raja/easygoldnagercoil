import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

import { C, NAV_LINKS, wa, scrollTo } from "./Constants";
import GlobalStyles from "./Globalstyles";
import { MagBtn } from "./Ui";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Whyus from "./components/Whyus";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Location from "./components/Location";

export default function App() {
  const [activeSection, setActive] = useState("home");
  const [cursorPos, setCursorPos]   = useState({ x: -100, y: -100 });
  const [cursorActive, setCursorActive] = useState(false);

  // Custom cursor tracking
  useEffect(() => {
    const move = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    const down = () => setCursorActive(true);
    const up   = () => setCursorActive(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
    };
  }, []);

  // Active section tracking on scroll
  useEffect(() => {
    const onScroll = () => {
      const offsets = NAV_LINKS.map((l) => {
        const el = document.getElementById(l.id);
        return el ? { id: l.id, top: el.getBoundingClientRect().top } : null;
      }).filter(Boolean) as { id: string; top: number }[];

      const active = offsets.filter((o) => o.top <= 120).pop();
      if (active) setActive(active.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif", background: C.w, color: C.dk, overflowX: "hidden" }}>
      <GlobalStyles />

      {/* Custom cursor */}
      <div
        className="cursor-dot"
        style={{ left: cursorPos.x, top: cursorPos.y, transform: `translate(-50%,-50%) scale(${cursorActive ? 1.8 : 1})` }}
      />
      <div className="cursor-ring" style={{ left: cursorPos.x, top: cursorPos.y }} />

      {/* WhatsApp floating button */}
      <MagBtn
        href={wa()}
        target="_blank"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#25D366",
          color: C.w,
          padding: "11px 17px 11px 13px",
          borderRadius: 50,
          boxShadow: "0 4px 20px rgba(0,0,0,.22)",
          animation: "ring 2.2s infinite",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: 0.3,
        }}
      >
        <MessageCircle size={17} /> Chat Now
      </MagBtn>

      {/* Page sections */}
      <Navbar activeSection={activeSection} />
      <Hero />
      <Marquee />
      <Services />
      <Whyus />
      <About />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}