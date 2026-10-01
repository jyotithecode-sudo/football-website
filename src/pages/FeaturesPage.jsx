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
const MODES = [
  { title: "CAREER MODE", desc: "Build your team, train hard, play smart, and rise to the top." },
  { title: "CAREER MODE", desc: "Build your team, train hard, play smart, and rise to the top." },
  { title: "LEAGUE & CUP GAMES", desc: "Take on club and national tournaments for glory." },
  { title: "WOMEN’S COMPETITIONS", desc: "Inclusive leagues and tournaments celebrating women’s football." },
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
 <section className="modes-section">
  <div className="modes-container">
    <div className="modes-header">
      <div className="modes-heading">
        <p className="modes-eyebrow">DIVERSE GAME MODES</p>
        <h2 className="modes-title">
          PLAY <span className="modes-title-pink">YOUR WAY.</span>
        </h2>
      </div>

      <p className="modes-paragraph">
        Play across multiple leagues, tournaments and challenges.
      </p>
    </div>

    <div className="modes-cards">
      {MODES.map((mode, i) => (
        <div key={i} className="modes-card">
          <span className="modes-card-number">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="modes-card-title">{mode.title}</h3>
          <p className="modes-card-desc">{mode.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}