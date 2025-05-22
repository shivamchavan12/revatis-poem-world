import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [animatedText, setAnimatedText] = useState("");
  const poeticQuotes = [
    "Words that inspire",
    "Verses of emotion",
    "Rhythms of the soul",
    "Poetic journey"
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycling poetic quotes
  useEffect(() => {
    let currentIndex = 0;
    const animateText = () => {
      setAnimatedText(poeticQuotes[currentIndex]);
      currentIndex = (currentIndex + 1) % poeticQuotes.length;
    };

    animateText();
    const timer = setInterval(animateText, 4000);
    return () => clearInterval(timer);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className={`poetry-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="poetry-nav container">
          {/* Brand Name & Animated Text */}
          <div className="brand-container">
            <Link to="/" className="brand-link">
              <span className="poet-name">Revati Sandip Chavan</span>
              <span className="tagline">{animatedText}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>

          {/* Navigation Links */}
          <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/poems" className={`nav-link ${location.pathname === "/poems" ? "active" : ""}`}>
                  Poems
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Push content below header */}
      <div className="content-offset"></div>
    </>
  );
};

export default Header;
