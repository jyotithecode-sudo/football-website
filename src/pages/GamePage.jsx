import React from "react";
import { Link } from "react-router-dom";
import "../Gamepage.css";

const GAMEPLAY = [
  {
    title: "DYNAMIC MATCH ENGINE",
    desc: "Smart AI and fluid animations bring every match to life.",
  },
  {
    title: "YOUR TACTICAL STYLE",
    desc: "Choose playing instructions that suit your strategy.",
  },
  {
    title: "STADIUM ATMOSPHERE",
    desc: "Dynamic pitches and commentary in 16 languages bring you closer to the match.",
  },
];
export default function GamePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="game-hero">
        <img
          src="/images/community-hero-bg.png"
          alt="Football match on the pitch"
          className="game-hero-bg"
        />

        <div className="game-hero-overlay" />

        <div className="game-hero-container">
          <div className="game-hero-content">
            <p className="game-hero-eyebrow">FOOTBALL LEAGUE 2026 / GAME</p>

            <h1 className="game-hero-title">
              PLAY FOOTBALL.
              <br />
              <span className="game-hero-title-pink">YOUR WAY.</span>
            </h1>

            <p className="game-hero-text">
              Realistic matches. Deep modes. Your global Football League
              experience.
            </p>

            <div className="game-hero-actions">
              <a
                href="https://discord.com/invite/m825ft9xGn"
                target="_blank"
                rel="noreferrer"
                className="game-hero-btn"
              >
                Play Now
              </a>

              <Link to="/features" className="game-hero-link">
                Explore all features
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- Gameplay (Every Move Matters.) ---------- */}
<section className="gameplay-section">
  <div className="gameplay-container">
    <div className="gameplay-header">
      <div className="gameplay-heading">
        <p className="gameplay-eyebrow">GAMEPLAY FEATURES</p>
        <h2 className="gameplay-title">
          EVERY MOVE <span className="gameplay-title-pink">MATTERS.</span>
        </h2>
      </div>

      <p className="gameplay-paragraph">
        Responsive controls. Tactical depth. A match engine built for the
        action.
      </p>
    </div>

    <div className="gameplay-body">
      <div className="gameplay-image-wrap">
        <img
          src="/images/gameplay-match.png"
          alt="Match in progress on the pitch"
          className="gameplay-image"
        />
      </div>

      <ul className="gameplay-list">
        {GAMEPLAY.map((item, i) => (
          <li key={item.title} className="gameplay-item">
            <span className="gameplay-item-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="gameplay-item-text">
              <h3 className="gameplay-item-title">{item.title}</h3>
              <p className="gameplay-item-desc">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
    </>
  );
}