import React from "react";
import "../App.css";
import "../FeaturesPage.css";

const CARDS = [
  { image: "/images/feature-stadium.jpg", label: "Stadium & Atmosphere" },
  { image: "/images/feature-gameplay.jpg", label: "Gameplay" },
  { image: "/images/feature-tactics.jpg", label: "Tactics" },
];

export default function FeaturesPage() {
  return (
    <section className="page">
      <div className="page-inner features-hero">
        <img
          src="/images/features-hero-bg.jpg"
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
            Realistic stadiums and responsive gameplay make every game night
            feel close to the pitch.
          </p>
        </div>

        <div className="feature-cards">
          {CARDS.map((card) => (
            <div key={card.label} className="feature-card">
              <img
                src={card.image}
                alt={card.label}
                className="feature-card-image"
              />

              <span className="feature-card-badge">✓</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}