import { ShieldCheck, Zap, BadgeCheck, Users } from "lucide-react";
import { C } from "../Constants";
import { useSR } from "../Hooks";
import { TiltCard } from "../Ui";
import img from "../assets/images/Money.jpeg";

const VALUES = [
  { icon: <ShieldCheck size={18} />, title: "Transparency", desc: "Every step is clear and honest. No hidden fees, no surprises — ever." },
  { icon: <Zap size={18} />, title: "Speed", desc: "We respect your time. Instant evaluation, instant cash — same day." },
  { icon: <BadgeCheck size={18} />, title: "Accuracy", desc: "Certified XRF technology ensures your gold purity is reported correctly, every time." },
  { icon: <Users size={18} />, title: "Customer First", desc: "Your trust is our foundation. We treat every customer with care and respect." },
];

export default function About() {
  const [sr2, s2] = useSR(0, "left");
  const [sr3, s3] = useSR(0.2, "right");

  return (
    <section id="about" style={{ padding: "88px 56px", background: C.g1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* TOP SECTION (TEXT + IMAGE) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 40,
            alignItems: "center",
            marginBottom: 60,
          }}
          className="about-top"
        >

          {/* LEFT CONTENT */}
          <div ref={sr2} style={s2}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: C.au }} />
              <p style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>
                Who We Are
              </p>
            </div>

            <h2 style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(28px,3.5vw,52px)",
              color: C.w,
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 24
            }}>
              Built on Trust, <em style={{ color: C.al, fontStyle: "italic" }}>Driven by Gold</em>
            </h2>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.95, marginBottom: 14 }}>
              Easy Gold Nagercoil offers a quick, safe, and transparent way to sell your old gold at the best market rates.
              We provide accurate purity testing, honest evaluation, and instant cash with no hidden charges.
            </p>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.95, marginBottom: 14 }}>
              Our goal is to make gold selling easy, reliable, and trustworthy for every customer.
              From the moment you walk in, our friendly team ensures a smooth experience.
            </p>

            <p style={{
              fontSize: 14,
              color: C.au,
              lineHeight: 1.9,
              fontStyle: "italic",
              marginBottom: 20,
              borderLeft: `2px solid rgba(201,168,76,.3)`,
              paddingLeft: 16
            }}>
              எங்கள் குறிக்கோள் — ஒவ்வொரு வாடிக்கையாளருக்கும் தங்க விற்பனையை எளிதாக, நம்பகமாக, நேர்மையாக மாற்றுவதே.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div ref={sr3} style={s3}>
            <TiltCard
              style={{
                position: "relative",
                borderRadius: 12,
                overflow: "hidden",
                height: 380,
              }}
            >
              <img
                src={img}
                alt="Gold Exchange"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* GOLD OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,.1))",
                }}
              />

              {/* TEXT ON IMAGE */}
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  color: "#fff",
                }}
              >
                <div style={{ fontSize: 13, color: C.au, marginBottom: 4 }}>
                  Trusted Gold Buyers
                </div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>
                  Instant Cash. Fair Value.
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* VALUES SECTION */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 32, height: 1, background: C.au }} />
            <p style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>
              Our Values
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
            }}
            className="about-grid"
          >
            {VALUES.map((v, i) => (
              <TiltCard
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "22px",
                  border: `1px solid rgba(201,168,76,.1)`,
                  borderRadius: 8,
                  background: "rgba(255,255,255,.02)",
                }}
              >
                <div style={{
                  width: 42,
                  height: 42,
                  borderRadius: 8,
                  background: C.g2,
                  color: C.al,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {v.icon}
                </div>

                <div>
                  <div style={{
                    fontWeight: 700,
                    fontSize: 15,
                    color: C.w,
                    marginBottom: 4,
                    fontFamily: "'Cormorant Garamond',serif"
                  }}>
                    {v.title}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.8 }}>
                    {v.desc}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}