import React from "react";
import "../App.css";
import "../FeaturesPage.css";


const CARDS = [
  {
    image: "/images/feature-stadium.png",
    tag: "ATMOSPHERE",
    title: "AUTHENTIC MATCH ATMOSPHERE",
    description: "New stadiums, dynamic pitches, live commentary in 16 languages.",
    badge: true,
  },
  {
    image: "/images/feature-gameplay.png",
    tag: "CONTROL",
    title: "INTUITIVE CONTROLS",
    description: "Smooth, mocap-based animations and improved goalkeeper reactions.",
    badge: false,
  },
  {
    image: "/images/feature-tactics.png",
    tag: "STRATEGY",
    title: "TACTICS STYLE",
    description: "A flexible playing-instruction system, with more upgrades coming.",
    badge: true,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="custom-features-section">
        <div className="page-inner features-hero">
          <img
            src="/images/features-hero-bg.png"
            alt="Player in a stadium"
            className="features-hero-bg"
          />
 
          <div className="features-hero-overlay" />
 
          <div className="features-hero-content">
            <p className="eyebrow eyebrow-pink">FEATURES</p>
 
            <h1 className="hero-title">
              DEPTH. STYLE.
              <br />
              <span className="text-pink">CONTROL.</span>
            </h1>
 
            <p className="intro-text">
              Built for football fans who crave depth, style and control.
            </p>
          </div>
        </div>
      </section>
 
      <section className="custom-match-intro-section">
        <div className="page-inner match-intro">
          <div className="match-intro-inner">
            <div className="match-intro-text">
              <p className="eyebrow eyebrow-pink">
                IMMERSIVE MATCH EXPERIENCE
              </p>
 
              <h2 className="section-title">
                FEEL EVERY <span className="text-pink">MATCH.</span>
              </h2>
            </div>
 
            <p className="intro-text match-intro-paragraph">
              Realistic stadiums and responsive gameplay make every game
              night feel close to the pitch.
            </p>
          </div>
 
          <div className="feature-cards">
            {CARDS.map((card) => (
              <div key={card.title} className="feature-card">
                <div className="feature-card-image-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="feature-card-image"
                  />
                  {card.badge && (
                    <span className="feature-card-badge">✓</span>
                  )}
                </div>
                <div class="content-box">
                <p className="feature-card-tag">{card.tag}</p>
                <h3 className="feature-card-title">{card.title}</h3>
                <p className="feature-card-desc">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}