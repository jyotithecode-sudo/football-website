import React from "react";
import { Link } from "react-router-dom";
import "../Gamepage.css";


export default function CommunityPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="community-hero">
        <img
          src="/images/community-hero-bg.png"
          alt="Football match on the pitch"
          className="community-hero-bg"
        />

        <div className="community-hero-overlay" />

        <div className="community-hero-container">
          <div className="community-hero-content">
            <p className="community-hero-eyebrow">
              FOOTBALL LEAGUE 2026 / COMMUNITY
            </p>

            <h1 className="community-hero-title">
              ONE GAME.
              <br />
              <span className="community-hero-title-pink">GLOBAL PASSION.</span>
            </h1>

            <p className="community-hero-text">
              Highlights. Rivals. Live chats. Your global Football League
              community.
            </p>

            <div className="community-hero-actions">
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
                className="community-hero-btn"
              >
                Join the Discord
              </a>

              <Link to="/features" className="community-hero-link">
                Explore all features
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}