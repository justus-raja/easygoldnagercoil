import { C } from "./Constants";

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap');
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
      html{scroll-behavior:smooth;}

      @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      @keyframes shimLine{0%{background-position:0% center}100%{background-position:200% center}}
      @keyframes revealUp{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:translateY(0)}}
      @keyframes revealLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
      @keyframes pulse{0%,100%{filter:drop-shadow(0 0 6px rgba(201,168,76,.4))}50%{filter:drop-shadow(0 0 22px rgba(232,192,96,.9))}}
      @keyframes ring{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.5)}70%{box-shadow:0 0 0 16px rgba(37,211,102,0)}}
      @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(1.7)}}
      @keyframes scrollBounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}
      @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}33%{transform:translateY(-12px) rotate(1.5deg)}66%{transform:translateY(-6px) rotate(-1deg)}}
      @keyframes goldGlow{0%,100%{box-shadow:0 0 20px rgba(201,168,76,.15)}50%{box-shadow:0 0 40px rgba(201,168,76,.4),0 0 80px rgba(201,168,76,.1)}}
      @keyframes heartbeat{0%,100%{transform:scale(1)}14%{transform:scale(1.1)}28%{transform:scale(1)}42%{transform:scale(1.05)}70%{transform:scale(1)}}
      @keyframes slideInUp{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}
      @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}

      .gold-line{height:2px;background:linear-gradient(90deg,transparent,${C.au},${C.ald},${C.au},transparent);background-size:200% auto;animation:shimLine 3s linear infinite;}
      .gold-text{background:linear-gradient(90deg,${C.au},${C.ald},${C.au});background-size:200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 3s linear infinite;}
      .cursor-dot{pointer-events:none;position:fixed;z-index:99999;width:8px;height:8px;background:${C.au};border-radius:50%;transform:translate(-50%,-50%);transition:transform .1s;}
      .cursor-ring{pointer-events:none;position:fixed;z-index:99998;width:36px;height:36px;border:1px solid rgba(201,168,76,.4);border-radius:50%;transform:translate(-50%,-50%);transition:left .12s ease,top .12s ease,width .2s,height .2s,opacity .2s;}

      .nl{color:rgba(255,255,255,.65);font-size:.8rem;font-weight:500;letter-spacing:.5px;text-decoration:none;background:none;border:none;cursor:pointer;font-family:inherit;padding:4px 0;position:relative;transition:color .2s;}
      .nl::after{content:'';position:absolute;bottom:-3px;left:0;right:0;height:1.5px;background:${C.al};transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.22,1,.36,1);}
      .nl:hover,.nl-active{color:${C.al};}
      .nl:hover::after,.nl-active::after{transform:scaleX(1);}

      .btn-gold{display:inline-flex;align-items:center;gap:8px;background:${C.au};color:${C.g1};padding:13px 28px;border-radius:3px;font-weight:700;font-size:.8rem;letter-spacing:.8px;text-decoration:none;border:none;cursor:pointer;font-family:inherit;box-shadow:0 4px 20px rgba(201,168,76,.25);text-transform:uppercase;overflow:hidden;position:relative;}
      .btn-gold::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);transition:left .5s;}
      .btn-gold:hover::before{left:100%;}
      .btn-gold:hover{background:${C.ald};box-shadow:0 8px 36px rgba(201,168,76,.45);}
      .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:${C.au};padding:12px 26px;border-radius:3px;font-weight:600;font-size:.8rem;letter-spacing:.8px;text-decoration:none;border:1px solid ${C.au};cursor:pointer;font-family:inherit;transition:all .25s;text-transform:uppercase;}
      .btn-outline:hover{background:${C.au};color:${C.g1};}

      .svc-card{border:1px solid #e5e7eb;border-radius:8px;padding:32px 28px;background:${C.w};position:relative;overflow:hidden;cursor:pointer;}
      .svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${C.au},${C.ald});transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.22,1,.36,1);}
      .svc-card::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(201,168,76,.06) 0%,transparent 60%);opacity:0;transition:opacity .3s;}
      .svc-card:hover::before{transform:scaleX(1);}
      .svc-card:hover::after{opacity:1;}
      .svc-card:hover{border-color:transparent;box-shadow:0 24px 56px rgba(0,0,0,.1);}
      .svc-icon{width:50px;height:50px;border-radius:8px;background:rgba(13,59,13,.07);color:${C.g3};display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:all .35s;}
      .svc-card:hover .svc-icon{background:${C.g2};color:${C.al};transform:scale(1.1) rotate(-5deg);}

      .why-card{display:flex;gap:18px;padding:26px 28px;border:1px solid #eef0f2;border-radius:8px;background:${C.w};align-items:flex-start;position:relative;overflow:hidden;}
      .why-card::after{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,${C.au},${C.g4});transform:scaleY(0);transform-origin:top;transition:transform .4s cubic-bezier(.22,1,.36,1);}
      .why-card:hover::after{transform:scaleY(1);}
      .why-card:hover{box-shadow:0 12px 40px rgba(0,0,0,.08);}
      .why-icon{width:46px;height:46px;border-radius:8px;flex-shrink:0;background:${C.g2};color:${C.al};display:flex;align-items:center;justify-content:center;transition:transform .3s;}
      .why-card:hover .why-icon{transform:scale(1.12) rotate(6deg);}

      .flink{color:rgba(255,255,255,.38);font-size:.8rem;text-decoration:none;display:flex;align-items:center;gap:6px;padding:5px 0;transition:all .2s;background:none;border:none;cursor:pointer;font-family:inherit;width:100%;text-align:left;}
      .flink:hover{color:${C.al};padding-left:6px;}
      .soc{width:34px;height:34px;border-radius:4px;border:1px solid rgba(201,168,76,.2);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.38);text-decoration:none;transition:all .25s;}
      .soc:hover{background:${C.au};border-color:${C.au};color:${C.g1};transform:translateY(-3px) rotate(8deg);}

      .diag-bg{background-image:repeating-linear-gradient(-45deg,rgba(201,168,76,.025) 0px,rgba(201,168,76,.025) 1px,transparent 1px,transparent 14px);}

      .stat-card{text-align:center;padding:28px 20px;border:1px solid rgba(201,168,76,.1);border-radius:8px;background:rgba(255,255,255,.03);transition:all .3s;position:relative;overflow:hidden;}
      .stat-card::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at center,rgba(201,168,76,.06) 0%,transparent 70%);opacity:0;transition:opacity .3s;}
      .stat-card:hover::before{opacity:1;}
      .stat-card:hover{border-color:rgba(201,168,76,.3);transform:translateY(-4px);}

      ::-webkit-scrollbar{width:4px;}
      ::-webkit-scrollbar-track{background:${C.g1};}
      ::-webkit-scrollbar-thumb{background:linear-gradient(${C.au},${C.g4});border-radius:10px;}

      @media(max-width:900px){
        .desktop-nav{display:none!important;}
        .mobile-toggle{display:flex!important;}
        .services-grid{grid-template-columns:1fr 1fr!important;}
        .about-grid{grid-template-columns:1fr!important;}
        .footer-grid{grid-template-columns:1fr 1fr!important;}
        .contact-grid{grid-template-columns:1fr!important;}
        .hero-strip{flex-direction:column!important;align-items:flex-start!important;}
        .stats-grid{grid-template-columns:1fr 1fr!important;}
        .hero-content-pad{padding:100px 24px 80px!important;flex-direction:column!important;}
        .hero-img-wrap{display:none!important;}
      }
      @media(max-width:600px){
        .services-grid{grid-template-columns:1fr!important;}
        .footer-grid{grid-template-columns:1fr!important;}
        .stats-grid{grid-template-columns:1fr 1fr!important;}
        .hero-content-pad{padding:90px 20px 70px!important;}
      }
    `}</style>
  );
}