// ── Shared Constants ──

export const WA = "919677554768";
export const wa = (msg = "Hello Easy Gold! I need support.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export const C = {
  g1: "#071a07",
  g2: "#0d3b0d",
  g3: "#155215",
  g4: "#1d6b1d",
  au: "#c9a84c",
  al: "#e8c060",
  ald: "#f5d070",
  adk: "#8a6a10",
  w: "#ffffff",
  of: "#faf8f3",
  dk: "#0d0d0d",
  gy: "#6b7280",
};

export const NAV_LINKS = [
  { label: "Home",     id: "home" },
  { label: "Services", id: "services" },
  { label: "Why Us",   id: "why" },
  { label: "About",    id: "about" },
  { label: "Location", id: "location" },
  { label: "Contact",  id: "contact" },
];

export const SERVICES = [
  { t: "Gold Trading",       d: "Buy & sell certified 22K & 24K gold at live market rates. Zero hidden charges, instant settlement.", icon: "TrendingUp", num: "01" },
  { t: "Vault Storage",      d: "RBI-compliant insured vaults with 24/7 security monitoring. Your gold always safe and accessible.",  icon: "Landmark",   num: "02" },
  { t: "Portfolio Advisory", d: "Expert advisors craft personalised gold investment strategies aligned with your financial goals.",    icon: "Award",      num: "03" },
  { t: "Gold Loans",         d: "Unlock your gold value instantly — competitive rates, minimal paperwork, same-day disbursement.",    icon: "Coins",      num: "04" },
  { t: "Digital Gold",       d: "Invest from ₹100. Track, buy and sell anytime via our secure real-time digital gold platform.",     icon: "Gem",        num: "05" },
  { t: "Gold Assaying",      d: "XRF testing delivers certified purity results in under 5 minutes — every single gram.",             icon: "FlaskConical", num: "06" },
];

export const WHY = [
  { t: "Instant Cash for Old Gold",         d: "Get instant cash for your old gold with quick evaluation and the best market rates. Enjoy a safe, transparent process with accurate testing and immediate payment.",                icon: "Zap" },
  { t: "Live Market-Based Pricing",         d: "Get the best value for your gold with live market-based pricing updated in real time. We ensure complete transparency by offering rates aligned with current gold market trends.", icon: "TrendingUp" },
  { t: "Safe and Secure Transactions",      d: "Your gold transactions are handled with complete safety, privacy, and professionalism. We ensure secure processes and trustworthy service for a worry-free experience.",           icon: "ShieldCheck" },
  { t: "Friendly and Professional Service", d: "Experience friendly and professional service with a team that values your time and trust. We ensure a smooth, respectful, and hassle-free gold selling experience every time.",    icon: "Users" },
];

export const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};