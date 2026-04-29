import { useState } from "react";
import { Send, CheckCheck, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { C, wa } from "../Constants";
import { useSR } from "../Hooks";
import { MagBtn, FloatInput } from "../Ui";

interface FormState {
  name: string;
  phone: string;
  address: string;
  message: string;
}

function ContactLeft() {
  const [ref, style] = useSR(0.1, "left");

  const DETAILS = [
    { icon: <MapPin size={16} color={C.au} />,  label: "Address", val: "54/1, SLB School Opposite,\nCourt Road, Nagercoil, Tamil Nadu", link: null },
    { icon: <Phone size={16} color={C.au} />,   label: "Call Us", val: "+91 96775 54768\n+91 90421 79916", link: "tel:+919677554768" },
    { icon: <Mail size={16} color={C.au} />,    label: "Email",   val: "info@easygold.com", link: "mailto:info@easygold.com" },
    { icon: <Clock size={16} color={C.au} />,   label: "Hours",   val: "Mon – Sat  ·  9:00 AM – 7:00 PM\nWalk-ins welcome", link: null },
  ];

  return (
    <div ref={ref} style={style}>
      <div style={{ background: "rgba(255,255,255,.025)", border: `1px solid rgba(201,168,76,.12)`, borderRadius: 10, padding: "36px 32px" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: C.w, fontWeight: 700, marginBottom: 28 }}>
          Contact Details
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {DETAILS.map((c, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: i < DETAILS.length - 1 ? `1px solid rgba(201,168,76,.07)` : "none" }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "rgba(13,59,13,.6)",
                  border: `1px solid rgba(201,168,76,.15)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ color: "rgba(201,168,76,.45)", fontSize: 9, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 4 }}>
                  {c.label}
                </div>
                {c.link ? (
                  <a
                    href={c.link}
                    style={{ color: C.w, fontSize: 13, fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.7, textDecoration: "none", transition: "color .2s" }}
                    onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.al)}
                    onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.w)}
                  >
                    {c.val}
                  </a>
                ) : (
                  <div style={{ color: C.w, fontSize: 13, fontWeight: 500, whiteSpace: "pre-line", lineHeight: 1.7 }}>{c.val}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>
          <MagBtn
            href={wa()}
            target="_blank"
            style={{
              display: "inline-flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#25D366",
              color: C.w,
              padding: "12px 16px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 12,
              textDecoration: "none",
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            <MessageCircle size={14} /> WhatsApp
          </MagBtn>
          <MagBtn
            href="tel:+919677554768"
            style={{
              display: "inline-flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "rgba(201,168,76,.12)",
              border: `1px solid rgba(201,168,76,.3)`,
              color: C.al,
              padding: "12px 16px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 12,
              textDecoration: "none",
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            <Phone size={14} /> Call Now
          </MagBtn>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [ref, style] = useSR(0);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", address: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.name || !form.phone) { alert("Please enter name and phone."); return; }
    const msg = `🏅 *Easy Gold — New Enquiry*\n\n👤 *Name:* ${form.name}\n📞 *Phone:* ${form.phone}\n📍 *Address:* ${form.address || "N/A"}\n💬 *Message:* ${form.message || "N/A"}`;
    window.open(wa(msg), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" style={{ background: C.g1, padding: "72px 56px 88px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <div ref={ref} style={{ ...style, textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <div style={{ width: 32, height: 1, background: C.au, opacity: 0.6 }} />
            <p style={{ color: C.au, fontSize: 10, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>Get In Touch</p>
            <div style={{ width: 32, height: 1, background: C.au, opacity: 0.6 }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(26px,3vw,48px)", color: C.w, fontWeight: 700, lineHeight: 1.05, marginBottom: 10 }}>
            Ready to Sell <em style={{ color: C.al, fontStyle: "italic" }}>Your Gold?</em>
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,.4)", maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
            Get an instant, no-obligation quote. We'll evaluate your gold and offer the best market rate — transparently and immediately.
          </p>
        </div>

        {/* Two column */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="contact-grid">
          <ContactLeft />

          {/* Form */}
          <div style={{ background: "rgba(255,255,255,.025)", border: `1px solid rgba(201,168,76,.12)`, borderRadius: 10, padding: "36px 32px" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: C.w, fontWeight: 700, marginBottom: 6 }}>
              Get Instant Quote
            </h3>
            <p style={{ color: "rgba(255,255,255,.3)", fontSize: 12, marginBottom: 24, lineHeight: 1.6 }}>
              Fill in your details — we'll call you back shortly
            </p>
            <FloatInput label="Full Name"     value={form.name}    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} />
            <FloatInput label="Phone Number"  type="tel" value={form.phone}   onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} />
            <FloatInput label="Your Address"  value={form.address} onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))} />
            <FloatInput label="Message"       value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} multiline />
            <MagBtn onClick={submit} className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "15px", marginTop: 4, borderRadius: 8, fontSize: 13 }}>
              <Send size={14} /> {sent ? "✅ Sent! We'll call you shortly." : "Submit & Get Quote on WhatsApp"}
            </MagBtn>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 14 }}>
              {["No spam", "Instant response", "100% secure"].map((t, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: 4, color: "rgba(201,168,76,.25)", fontSize: 10, letterSpacing: 1, textTransform: "uppercase" }}>
                  <CheckCheck size={10} color={C.au} style={{ opacity: 0.3 }} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}