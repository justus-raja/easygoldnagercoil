import { CheckCheck, ArrowRight, ChevronDown, Phone, MessageCircle, Star } from "lucide-react";
import { C, wa, scrollTo } from "../Constants";
import { MagBtn, TypedText, GoldParticles } from "../Ui";
import bannerimg from "../assets/images/Goldbar.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: C.g1,
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at 15% 50%,rgba(29,107,29,.35) 0%,transparent 60%), radial-gradient(ellipse at 80% 20%,rgba(201,168,76,.06) 0%,transparent 50%), linear-gradient(160deg,#0f3d0f 0%,${C.g1} 60%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(201,168,76,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.03) 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <GoldParticles />
        <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path d="M0,80 C240,160 480,20 720,100 C960,180 1200,40 1440,100 L1440,180 L0,180 Z" fill="rgba(13,59,13,.55)" />
          <path d="M0,120 C300,60 600,160 900,100 C1100,60 1300,130 1440,100 L1440,180 L0,180 Z" fill="rgba(7,26,7,.8)" />
        </svg>
      </div>

      <div className="gold-line" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }} />

      {/* Hero Content */}
      <div
        className="hero-content-pad"
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "130px 56px 110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {/* Left — Text */}
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 22, animation: "revealUp .5s .1s both" }}>
            <div style={{ width: 28, height: 1, background: `linear-gradient(90deg,transparent,${C.au})` }} />
            <span style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>
              Nagercoil's #1 Gold Service · Est. 2010
            </span>
            <div style={{ width: 28, height: 1, background: `linear-gradient(90deg,${C.au},transparent)` }} />
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 14,
              animation: "revealUp .6s .2s both",
              textAlign: "left",
            }}
          >
            <span style={{ display: "block", color: C.w, fontSize: "clamp(36px,5.5vw,76px)", letterSpacing: -1 }}>
              Premium Gold Services
            </span>
            <span
              className="gold-text"
              style={{ display: "block", fontSize: "clamp(22px,3.2vw,46px)", fontStyle: "italic", fontWeight: 300, letterSpacing: 1, marginTop: 8 }}
            >
              <TypedText texts={["for Nagercoil", "உங்கள் நகை", "Best Rates", "Instant Cash"]} />
            </span>
          </h1>

          {/* Tamil subtitles */}
          <p style={{ color: "rgba(201,168,76,.75)", fontSize: 15, fontWeight: 600, marginBottom: 4, animation: "revealUp .6s .3s both" }}>
            உங்கள் தங்கத்திற்கு அதிக விலை தரும் ஒரே நிறுவனம்
          </p>
          <p style={{ color: "rgba(255,255,255,.32)", fontSize: 13, fontStyle: "italic", marginBottom: 26, animation: "revealUp .6s .35s both" }}>
            உங்கள் நகையின் விலையை நீங்களே தீர்மானியுங்கள்
          </p>

          {/* Bullet points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30, animation: "revealUp .6s .38s both" }}>
            {[
              "வட்டியில் மூழ்கும் நகைகளை மீட்டு அதிக விலைக்கு விற்பனை செய்து தருகிறோம்.",
              "அதிக வட்டியில் மூழ்கும் நகைகளை மீட்டு குறைந்த வட்டியில் மறு அடகு செய்ய நாங்களே பண உதவி செய்து தருகிறோம்.",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: 2,
                    background: `linear-gradient(135deg,${C.au},${C.adk})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CheckCheck size={12} color={C.g1} strokeWidth={3} />
                </div>
                <span style={{ color: "rgba(255,255,255,.85)", fontSize: 14, lineHeight: 1.75, fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 34, animation: "revealUp .6s .42s both" }}>
            <MagBtn onClick={() => scrollTo("contact")} className="btn-gold" style={{ padding: "15px 34px", fontSize: 14 }}>
              Get Free Quote <ArrowRight size={15} />
            </MagBtn>
            <MagBtn
              href={wa()}
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#25D366",
                color: C.w,
                padding: "15px 28px",
                borderRadius: 3,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                letterSpacing: 0.5,
                textTransform: "uppercase",
                boxShadow: "0 4px 18px rgba(37,211,102,.3)",
              }}
            >
              <MessageCircle size={16} /> WhatsApp Us
            </MagBtn>
          </div>

          {/* Strip */}
          <div
            className="hero-strip"
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 3,
              overflow: "hidden",
              border: `1px solid rgba(201,168,76,.12)`,
              animation: "revealUp .6s .48s both",
              marginBottom: 30,
            }}
          >
            {[
              { icon: <Phone size={13} color={C.au} />, label: "Call Us", value: "+91 96775 54768" },
              {
                icon: (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#4ade80",
                      boxShadow: "0 0 5px #4ade80",
                      animation: "pulseDot 2s ease-in-out infinite",
                    }}
                  />
                ),
                label: "Hours",
                value: "Mon–Sat  9AM–7PM",
              },
              { icon: <Star size={12} color="#facc15" fill="#facc15" />, label: "Rating", value: "4.9 / 5 (88 reviews)" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "12px 20px",
                  borderRight: i < 2 ? `1px solid rgba(201,168,76,.1)` : "none",
                  background: "rgba(255,255,255,.03)",
                }}
              >
                {s.icon}
                <div style={{ textAlign: "left" }}>
                  <div style={{ color: "rgba(201,168,76,.38)", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>
                    {s.label}
                  </div>
                  <div style={{ color: C.w, fontSize: 12, fontWeight: 600, marginTop: 1 }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Banner Image */}
        <div
          className="hero-img-wrap"
          style={{ flexShrink: 0, width: 380, position: "relative", animation: "revealUp .9s .3s both" }}
        >
          <div
            style={{
              position: "absolute",
              inset: -12,
              borderRadius: 16,
              background: `radial-gradient(ellipse at center,rgba(201,168,76,.18) 0%,transparent 70%)`,
              animation: "goldGlow 4s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -6,
              left: -6,
              right: -6,
              bottom: -6,
              border: `1px solid rgba(201,168,76,.25)`,
              borderRadius: 16,
              animation: "goldGlow 4s ease-in-out infinite",
            }}
          />
          <img
            src={bannerimg}
            alt="Gold Jewellery"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: 480,
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: 12,
              display: "block",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 24px 64px rgba(0,0,0,.55), 0 0 40px rgba(201,168,76,.12)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: `linear-gradient(to top,${C.g1},transparent)`,
              borderRadius: "0 0 12px 12px",
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              background: `linear-gradient(135deg,${C.g1},${C.g2})`,
              border: `1px solid rgba(201,168,76,.35)`,
              borderRadius: 8,
              padding: "10px 18px",
              whiteSpace: "nowrap",
              boxShadow: "0 8px 24px rgba(0,0,0,.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulseDot 2s ease-in-out infinite" }} />
              <span style={{ color: C.al, fontSize: 11, fontWeight: 700, letterSpacing: 0.8 }}>
                Live Market Rates · Best Price Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll bounce */}
      <div style={{ position: "absolute", bottom: 22, left: "50%", zIndex: 3, animation: "scrollBounce 2.2s ease-in-out infinite" }}>
        <ChevronDown size={22} color="rgba(201,168,76,.35)" />
      </div>
    </section>
  );
}