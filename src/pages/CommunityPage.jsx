import React from "react";
import { Link } from "react-router-dom";
import "../CommunityPage.css";

const DISCORD_LINK = "https://discord.com/invite/m825ft9xGn";

const SOCIALS = [
  {
    name: "Discord",
    icon: "/images/icon-discord.png",
    desc: "Build your team, train hard, play smart, and rise to the top.",
    btn: "Join the Discord",
    href: DISCORD_LINK,
    primary: true,
  },
  {
    name: "Facebook",
    icon: "/images/icon-facebook.png",
    desc: "Build your team, train hard, play smart, and rise to the top.",
    btn: "Follow on Facebook",
    href: "https://facebook.com", // apna asli Facebook page link daalo
    primary: false,
  },
  {
    name: "Instagram",
    icon: "/images/icon-instagram.png",
    desc: "Goal montages, kit drops, and behind-the-scenes art.",
    btn: "Follow on Instagram",
    href: "https://instagram.com", // apna asli Instagram page link daalo
    primary: false,
  },
];
const ACTIONS = [
  {
    image: "/images/news-2.png",
    title: "MATCH HIGHLIGHTS",
    link: "See the highlights",
    href: "#", // asli link daalo
    big: true,
  },
  {
    image: "/images/news-2.png",
    title: "TEAM BUILDS",
    link: "Talk tactics on Discord",
    href: DISCORD_LINK,
    big: false,
  },
  {
    image: "/images/news-2.png",
    title: "EXCLUSIVE EVENTS",
    link: "Follow event announcements",
    href: "#", // asli link daalo
    big: false,
  },
];
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

      {/* ---------- Social (Find Your Home End.) ---------- */}
      <section className="social-section">
        <div className="social-container">
          <div className="social-header">
            <div className="social-heading">
              <p className="social-eyebrow">STAY CONNECTED</p>
              <h2 className="social-title">
                FIND YOUR <span className="social-title-pink">HOME END.</span>
              </h2>
            </div>

            <p className="social-paragraph">
              Follow the action. Share your passion. Keep the conversation
              going.
            </p>
          </div>

          <div className="social-cards">
            {SOCIALS.map((item) => (
              <div
                key={item.name}
                className={`social-card ${
                  item.primary ? "social-card-active" : ""
                }`}
              >
                <div className="social-card-head">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="social-card-icon"
                  />
                  <h3 className="social-card-title">{item.name}</h3>
                </div>

                <p className="social-card-desc">{item.desc}</p>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`social-card-btn ${
                    item.primary
                      ? "social-card-btn-primary"
                      : "social-card-btn-outline"
                  }`}
                >
                  {item.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------- Action (See the Action.) ---------- */}
<section className="action-section">
  <div className="action-container">
    <div className="action-header">
      <div className="action-heading">
        <p className="action-eyebrow">FROM INSIDE THE GAME</p>
        <h2 className="action-title">
          SEE THE <span className="action-title-pink">ACTION.</span>
        </h2>
      </div>

      <p className="action-paragraph">
        Match moments, squad tactics, and the road to your next trophy.
      </p>
    </div>

    <div className="action-grid">
      {ACTIONS.map((item) => (
        <div
          key={item.title}
          className={`action-card ${item.big ? "action-card-big" : ""}`}
        >
          <img src={item.image} alt={item.title} className="action-card-image" />
          <div className="action-card-overlay" />

          <div className="action-card-content">
            <h3 className="action-card-title">{item.title}</h3>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="action-card-link"
            >
              {item.link}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ---------- CTA (Same Game. More Connections.) ---------- */}
<section className="cta-section">
  <img
    src="/images/cta-bg.png"
    alt=""
    className="cta-bg"
  />

  <div className="cta-container">
    <div className="cta-content">
      <p className="cta-eyebrow">YOUR GLOBAL FOOTBALL COMMUNITY</p>

      <h2 className="cta-title">
        SAME GAME.
        <br />
        <span className="cta-title-pink">MORE CONNECTIONS.</span>
      </h2>

      <p className="cta-text">
        Join the conversation with Football League players.
      </p>
    </div>

    <div className="cta-actions">
      <a
        href={DISCORD_LINK}
        target="_blank"
        rel="noreferrer"
        className="cta-btn"
      >
        Join the Discord
      </a>

      <div className="cta-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="cta-link"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="cta-link"
        >
          Instagram
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}