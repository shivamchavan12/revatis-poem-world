import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaYoutube, FaArrowRight, FaBookOpen, FaFeatherAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import poetryImage from "../assets/images/bhakti.jpg";
import "./Home.css";

function Home() {
  const heroRef = useRef(null);
  const revealRefs = useRef([]);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Hero entrance
    const heroTimer = setTimeout(() => setHeroVisible(true), 100);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="home-page">
      {/* Floating decorative orbs */}
      <div className="deco-orb deco-orb--gold" aria-hidden="true"></div>
      <div className="deco-orb deco-orb--coral" aria-hidden="true"></div>
      <div className="deco-orb deco-orb--wine" aria-hidden="true"></div>

      <div className="home-content">
        {/* ═══════════════ HERO ═══════════════ */}
        <section className={`hero ${heroVisible ? "hero--visible" : ""}`} ref={heroRef}>
          <div className="hero__visual">
            <div className="hero__image-ring">
              <div className="hero__image-inner">
                <img src={poetryImage} alt="Revati Sandip Chavan – कवयित्री" className="hero__photo" />
              </div>
              <span className="hero__sparkle" aria-hidden="true">✦</span>
              <span className="hero__sparkle" aria-hidden="true">✧</span>
              <span className="hero__sparkle" aria-hidden="true">✦</span>
              <span className="hero__sparkle" aria-hidden="true">✧</span>
            </div>
          </div>

          <div className="hero__text">
            <span className="hero__greeting">✨ Welcome to the Poetry World</span>
            <h1 className="hero__title">
              Revati's
              <span className="hero__title-accent">Poem World</span>
            </h1>
            <p className="hero__subtitle">
              शब्दांच्या सुंदर विश्वात आपले स्वागत, जिथे भावना कवितेतून बोलतात,
              आणि प्रत्येक ओळ हृदयाला स्पर्श करते.
            </p>

            <div className="hero__actions">
              <Link to="/poems" className="btn-primary" id="hero-cta-poems">
                <FaBookOpen className="btn-icon" />
                <span>माझ्या कविता वाचा</span>
                <FaArrowRight className="btn-icon" />
              </Link>
              <Link to="/about" className="btn-outline" id="hero-cta-about">
                <FaFeatherAlt />
                <span>माझ्याबद्दल</span>
              </Link>
            </div>
          </div>
        </section>
        {/* ═══════════════ SOCIAL CONNECT ═══════════════ */}
        <section className="social-section">
          <div className="section-header reveal" ref={addRevealRef}>
            <span className="section-label">✦ Connect ✦</span>
            <h2 className="section-title">Stay Connected</h2>
            <p className="section-desc">
              रेवतीच्या कविता ऐकण्यासाठी आणि तिच्याशी कनेक्टेड राहण्यासाठी,
              इंस्टाग्राम आणि यूट्यूबवर फॉलो करा.
            </p>
          </div>

          <div className="social-grid">
            <a
              href="https://www.instagram.com/kalakavyakunj?igsh=MWdsMnc3OTRpM253Yw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--instagram reveal reveal-delay-1"
              ref={addRevealRef}
              id="social-instagram"
            >
              <div className="social-card__icon-wrap">
                <FaInstagram />
              </div>
              <div className="social-card__info">
                <p className="social-card__platform">Instagram</p>
                <p className="social-card__handle">@kalakavyakunj</p>
              </div>
              <span className="social-card__arrow">→</span>
            </a>

            <a
              href="https://www.youtube.com/@revatichavan786"
              target="_blank"
              rel="noopener noreferrer"
              className="social-card social-card--youtube reveal reveal-delay-2"
              ref={addRevealRef}
              id="social-youtube"
            >
              <div className="social-card__icon-wrap">
                <FaYoutube />
              </div>
              <div className="social-card__info">
                <p className="social-card__platform">YouTube</p>
                <p className="social-card__handle">@gaurichavan1457</p>
              </div>
              <span className="social-card__arrow">→</span>
            </a>
          </div>
        </section>
        {/* Divider */}
        <div className="section-divider" aria-hidden="true">❖ ❖ ❖</div>


        {/* ═══════════════ MARATHI CTA BANNER ═══════════════ */}
        <section className="marathi-cta">
          <div className="marathi-cta__banner reveal" ref={addRevealRef}>
            <h2 className="marathi-cta__title">
              माझ्या कविता वाचण्यासाठी<br />क्लिक करा
            </h2>
            <p className="marathi-cta__desc">
              प्रत्येक कविता हृदयाच्या भाषेत लिहिलेली — आनंद, दुःख, भक्ती आणि प्रेम यांचे सुंदर मिश्रण.
            </p>
            <Link to="/poems" className="btn-gold" id="marathi-cta-poems">
              <FaBookOpen />
              <span>कविता संग्रह</span>
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
