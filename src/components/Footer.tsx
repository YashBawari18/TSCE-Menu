import React, { useEffect, useRef } from "react";

const Footer: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    const footer = footerRef.current;
    if (!bg || !footer) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const mobileCutoff = 520;

    if (prefersReducedMotion || window.innerWidth <= mobileCutoff) return;

    const onScroll = () => {
      const rect = footer.getBoundingClientRect();
      const vh = window.innerHeight;
      const visible = Math.max(
        0,
        Math.min(1, (vh - rect.top) / (vh + rect.height))
      );
      const translateBg = (visible - 0.5) * 25;
      bg.style.transform = `translateY(${translateBg}px) scale(1.05)`;
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <footer className="parallax-footer" ref={footerRef}>
      <div className="parallax-footer__bg" ref={bgRef} />
      <div className="parallax-footer__mid" />
      <div className="parallax-footer__pattern" />

      <div className="parallax-footer__content">
        <div className="brand">
          <div className="brand__logo">FH</div>
          <div className="brand__meta">
            <h3>RecipeAI</h3>
            <p>
              Fresh recipes, seasonal picks & weekly meal plans — delivered with
              love.
            </p>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <li><strong>Explore</strong></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Meal Plans</a></li>
            <li><a href="#">Grocery Lists</a></li>
            <li><a href="#">Quick Tips</a></li>
          </ul>
          <ul>
            <li><strong>Company</strong></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul>
            <li><strong>Support</strong></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            ©️ {new Date().getFullYear()} RecipeAI
            <div className="spoon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 3c.6 0 1 .4 1 1 0 .6-.4 1-1 1s-1-.4-1-1c0-.6.4-1 1-1z"
                  fill="white"
                  opacity="0.9"
                />
                <path
                  d="M20.7 11.3a8 8 0 1 0-11.4 11.4l4.2-4.2 7.2-7.2z"
                  fill="white"
                  opacity="0.06"
                />
                <path
                  d="M3.7 21.7c.4.4 1 .4 1.4 0l6.6-6.6-1.4-1.4L3.7 20.3c-.4.4-.4 1 0 1.4z"
                  fill="white"
                  opacity="0.14"
                />
              </svg>
            </div>
          </div>

          <div className="footer-extra">
            <nav className="socials">
              <a href="#" className="hover-glow">IG</a>
               
            </nav>

            <div className="newsletter">
              <h4>Get weekly recipe picks</h4>
              <p>
                Subscribe to our newsletter — seasonal recipes & one-pan dinner ideas.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Subscribed!");
                }}
              >
                <input type="email" placeholder="you@domain.com" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .parallax-footer {
          position: relative;
          overflow: hidden;
          color: #fff;
          padding: 60px 30px;
          background: linear-gradient(160deg, #1b1b1b, #111111);
          display: flex;
          flex-direction: column;
          font-family: 'Poppins', sans-serif;
        }
        .parallax-footer__bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          z-index: 0;
          filter: brightness(0.5) contrast(1.2) saturate(1.1);
          will-change: transform;
          transition: transform 0.3s ease-out;
        }
        .parallax-footer__mid {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 1;
        }
        .parallax-footer__pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.02), transparent 25%),
                            repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0 6px, transparent 6px 12px);
          mix-blend-mode: overlay;
          z-index: 2;
        }
        .parallax-footer__content {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
        }
        @media(min-width:880px){ .parallax-footer__content{grid-template-columns: 2fr 3fr;} }

        .brand { display: flex; gap: 24px; align-items: flex-end; animation: fadeInUp 1s ease forwards; opacity: 0; }
        .brand__logo {
          width: 85px;
          height: 85px;
          border-radius: 18px;
          background: linear-gradient(135deg, #ff6b35, #ff8c66);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 26px;
          text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
        }
        .brand__meta h3 { margin: 0 0 8px; font-size: 26px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; }
        .brand__meta p { margin: 0; font-size: 16px; line-height: 1.6; opacity: 0.9; }

        .footer-links {
          display: flex;
          gap: 50px;
          flex-wrap: wrap;
          animation: fadeInUp 1s 0.3s ease forwards;
          opacity: 0;
        }
        .footer-links ul { list-style: none; padding: 0; }
        .footer-links li { margin: 10px 0; font-size: 16px; font-weight: 500; }
        .footer-links a {
          color: inherit;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s;
          position: relative;
        }
        .footer-links a::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 2px;
          background: #ff6b35;
          transition: width 0.3s;
        }
        .footer-links a:hover::after { width: 100%; }
        .footer-links a:hover { color: #ff6b35; transform: translateX(4px); }

        .footer-bottom { display: flex; justify-content: space-between; gap: 28px; margin-top: 45px; flex-wrap: wrap; animation: fadeInUp 1s 0.6s ease forwards; opacity: 0; }
        .footer-extra { display: flex; gap: 28px; flex-wrap: wrap; align-items: flex-start; }

        .socials { display: flex; gap: 14px; }
        .socials a {
          display: inline-flex;
          width: 42px; height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.4s;
        }
        .socials a.hover-glow:hover {
          transform: scale(1.15);
          background: #ff6b35;
          box-shadow: 0 0 12px #ff6b35;
        }

        .newsletter {
          background: rgba(255,255,255,0.08);
          padding: 22px;
          border-radius: 18px;
          backdrop-filter: blur(6px);
          min-width: 280px;
          transition: all 0.3s;
        }
        .newsletter:hover { box-shadow: 0 0 15px rgba(255,107,53,0.5); }
        .newsletter h4 { margin: 0 0 12px; font-size: 19px; font-weight: 700; letter-spacing: 0.5px; }
        .newsletter p { margin: 0 0 16px; font-size: 15px; }
        .newsletter input {
          flex: 1;
          padding: 13px 16px;
          border-radius: 14px;
          border: none;
          outline: none;
          font-size: 15px;
          transition: all 0.3s;
        }
        .newsletter input:focus { box-shadow: 0 0 10px #ff6b35; background: rgba(255,255,255,0.1); }
        .newsletter button {
          padding: 13px 18px;
          border-radius: 14px;
          border: none;
          background: #ff6b35;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }
        .newsletter button:hover { transform: scale(1.07); box-shadow: 0 0 12px #ff6b35; }

        .spoon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .spoon:hover { transform: scale(1.05); box-shadow: 0 0 12px #ff6b35; }

        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(25px); } 100% { opacity: 1; transform: translateY(0); } }

        @media (max-width: 880px) { 
          .footer-links { justify-content: space-between; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 22px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;