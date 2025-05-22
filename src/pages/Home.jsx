import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import poetryImage from "../assets/images/bhakti.jpg";
import "./Home.css";

function Home() {
  const animatedElements = useRef([]);

  useEffect(() => {
    animatedElements.current.forEach((el, index) => {
      if (el) {
        el.classList.add("fade-in-up", `delay-${index}`);
      }
    });

    return () => {
      animatedElements.current.forEach((el, index) => {
        if (el) {
          el.classList.remove("fade-in-up", `delay-${index}`);
        }
      });
    };
  }, []);

  return (
    <div className="home-page">
      {/* Decorative Elements */}
      <div className="decorative-element left"></div>
      <div className="decorative-element right"></div>

      <main className="poetry-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="image-frame" ref={(el) => (animatedElements.current[0] = el)}>
            <div className="image-container">
              <img src={poetryImage} alt="Revati Sandip Chavan" className="poet-image" />
              <div className="image-overlay"></div>
            </div>
          </div>

          <h1 className="poet-title" ref={(el) => (animatedElements.current[1] = el)}>
            <span className="welcome-text">Welcome to</span>
            <span className="poet-name">Revati's Poetry World</span>
          </h1>

          <p className="poet-description" ref={(el) => (animatedElements.current[2] = el)}>
            Immerse yourself in the beauty of words and emotions.  
            Let poetry be your guide through life's journey.
          </p>

          <div className="action-container" ref={(el) => (animatedElements.current[3] = el)}>
            <Link to="/poems" className="poetry-button">
              <span className="button-text">माझ्या कविता वाचण्यासाठी क्लिक करा</span>
            </Link>
          </div>
        </section>

        {/* Featured Poem Section */}
        <section className="featured-poem" ref={(el) => (animatedElements.current[4] = el)}>
          <div className="poem-card">
            <h2 className="featured-title">✨ Featured Poem ✨</h2>
            <div className="poem-content">
              <p className="poem-line">जीवनाच्या वाटेवर चालताना,</p>
              <p className="poem-line">शब्दांचे साथी मिळाले मला...</p>
              <p className="poem-line">कधी आनंदात, कधी वेदनेत,</p>
              <p className="poem-line">कवितेने दिलासा दिला मला.</p>
            </div>
            <Link to="/poems" className="read-more">अधिक वाचा →</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
