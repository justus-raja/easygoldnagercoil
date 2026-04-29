import { MapPin, Phone, Clock, MessageCircle, Star } from "lucide-react";
import { C, wa } from "../Constants";
import { useSR } from "../Hooks";
import { MagBtn } from "../Ui";

const INFO = [
  { icon: <MapPin size={18} color={C.au} />,        label: "Address",  val: "54/1, SLB School Opposite, Court Road, Nagercoil, Tamil Nadu" },
  { icon: <Phone size={18} color={C.au} />,          label: "Phone",    val: "+91 96775 54768\n+91 90421 79916" },
  { icon: <Clock size={18} color={C.au} />,          label: "Hours",    val: "Monday – Saturday\n9:00 AM – 7:00 PM" },
  { icon: <MessageCircle size={18} color={C.au} />,  label: "WhatsApp", val: "+91 96775 54768" },
];

export default function Location() {
  const [ref, style] = useSR(0);

  return (
    <section id="location" style={{ background: C.of, padding: "88px 56px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} style={style}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
              <div style={{ width: 32, height: 1, background: C.au }} />
              <p style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>Find Us</p>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,3.5vw,52px)", color: C.g1, fontWeight: 700, lineHeight: 1.05 }}>
              Our <em style={{ color: C.g4, fontStyle: "italic" }}>Location</em>
            </h2>
          </div>
        </div>

        {/* Grid: Map + Info */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28, alignItems: "stretch" }} className="about-grid">
          {/* Map */}
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              border: `1px solid rgba(201,168,76,.18)`,
              position: "relative",
              minHeight: 500,
              animation: "goldGlow 4s ease-in-out infinite",
            }}
          >
            {/* Map Badge */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                zIndex: 10,
                background: `linear-gradient(135deg,${C.g1},${C.g2})`,
                border: `1px solid rgba(201,168,76,.4)`,
                borderRadius: 8,
                padding: "12px 16px",
                boxShadow: "0 6px 24px rgba(0,0,0,.4)",
                maxWidth: 200,
              }}
            >
              <div style={{ color: C.al, fontWeight: 700, fontSize: 12, marginBottom: 3, fontFamily: "'Cormorant Garamond',serif" }}>
                Easy Gold | Nagercoil
              </div>
              <div style={{ color: "rgba(255,255,255,.45)", fontSize: 11, lineHeight: 1.6 }}>
                54/1, SLB School Opp.
                <br />
                Court Road, Nagercoil
              </div>
              <div style={{ display: "flex", gap: 2, margin: "7px 0" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} color="#facc15" fill="#facc15" />
                ))}
                <span style={{ color: "rgba(255,255,255,.3)", fontSize: 10, marginLeft: 4 }}>4.9</span>
              </div>
              <a
                href="https://maps.google.com/?q=54/1+SLB+School+Opposite+Court+Road+Nagercoil"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: C.au,
                  color: C.g1,
                  padding: "5px 10px",
                  borderRadius: 4,
                  fontSize: 10,
                  fontWeight: 700,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                <MapPin size={9} /> Directions
              </a>
            </div>

            <iframe
              title="Easy Gold Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.08!2d77.4119!3d8.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ef40b0d1e46b%3A0x1fea6e1e7a265cd8!2sNagercoil%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: 500 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {INFO.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "18px 20px",
                  border: `1px solid rgba(201,168,76,.15)`,
                  borderRadius: 8,
                  background: C.w,
                  transition: "all .3s",
                  cursor: "default",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = C.au;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(6px)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,.15)";
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                }}
              >
                <div
                  style={{ width: 40, height: 40, borderRadius: 8, background: C.g2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ color: "rgba(201,168,76,.7)", fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 5 }}>
                    {c.label}
                  </div>
                  <div style={{ color: C.g1, fontSize: 13, fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.65 }}>
                    {c.val}
                  </div>
                </div>
              </div>
            ))}

            <MagBtn
              href={wa()}
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                background: "#25D366",
                color: C.w,
                padding: "14px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                letterSpacing: 0.5,
                textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(37,211,102,.25)",
                marginTop: 4,
              }}
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </MagBtn>
          </div>
        </div>
      </div>
    </section>
  );
}