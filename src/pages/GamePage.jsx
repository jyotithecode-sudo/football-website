import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Gamepage.css";

const GAMEPLAY = ["g1", "g2", "g3"];

const WAYS = [
  { key: "w1", pink: false },
  { key: "w2", pink: true },
  { key: "w3", pink: false },
  { key: "w4", pink: true },
];

const SHOTS = [
  { key: "s1", image: "/images/shots-1.png", pink: true },
  { key: "s2", image: "/images/shots-2.png", pink: false },
  { key: "s3", image: "/images/shots-3.png", pink: false },
];

export default function GamePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="game-hero">
        <img
          src="/images/community-hero-bg.png"
          alt=""
          className="game-hero-bg"
        />

        <div className="game-hero-overlay" />

        <div className="game-hero-container">
          <div className="game-hero-content">
            <p className="game-hero-eyebrow">{t("game.hero.eyebrow")}</p>

            <h1 className="game-hero-title">
              {t("game.hero.title1")}
              <br />
              <span className="game-hero-title-pink">
                {t("game.hero.titlePink")}
              </span>
            </h1>

            <p className="game-hero-text">{t("game.hero.text")}</p>

            <div className="game-hero-actions">
              <a
                href="https://discord.com/invite/m825ft9xGn"
                target="_blank"
                rel="noreferrer"
                className="game-hero-btn"
              >
                {t("nav.playNow")}
              </a>

              <Link to="/features" className="game-hero-link">
                {t("game.hero.explore")}
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
              <p className="gameplay-eyebrow">{t("game.gameplay.eyebrow")}</p>
              <h2 className="gameplay-title">
                {t("game.gameplay.title")}{" "}
                <span className="gameplay-title-pink">
                  {t("game.gameplay.titlePink")}
                </span>
              </h2>
            </div>

            <p className="gameplay-paragraph">{t("game.gameplay.text")}</p>
          </div>

          <div className="gameplay-body">
            <div className="gameplay-image-wrap">
              <img
                src="/images/gameplay-match.png"
                alt=""
                className="gameplay-image"
              />
            </div>

            <ul className="gameplay-list">
              {GAMEPLAY.map((key, i) => (
                <li key={key} className="gameplay-item">
                  <span className="gameplay-item-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="gameplay-item-text">
                    <h3 className="gameplay-item-title">
                      {t(`game.gameplay.items.${key}.title`)}
                    </h3>
                    <p className="gameplay-item-desc">
                      {t(`game.gameplay.items.${key}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Ways (More Ways to Play.) ---------- */}
      <section className="ways-section">
        <img src="/images/ways-bg.png" alt="" className="ways-bg" />

        <div className="ways-container">
          <div className="ways-header">
            <div className="ways-heading">
              <p className="ways-eyebrow">{t("game.ways.eyebrow")}</p>
              <h2 className="ways-title">
                {t("game.ways.title")}{" "}
                <span className="ways-title-pink">{t("game.ways.titlePink")}</span>
              </h2>
            </div>

            <p className="ways-paragraph">{t("game.ways.text")}</p>
          </div>

          <div className="ways-cards">
            {WAYS.map((item, i) => (
              <div key={item.key} className="ways-card">
                <span
                  className={`ways-card-number ${
                    item.pink ? "ways-card-number-pink" : ""
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="ways-card-title">
                  {t(`game.ways.items.${item.key}.title`)}
                </h3>
                <p className="ways-card-desc">
                  {t(`game.ways.items.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Shots (See the Action.) ---------- */}
      <section className="shots-section">
        <div className="shots-container">
          <div className="shots-header">
            <div className="shots-heading">
              <p className="shots-eyebrow">{t("game.shots.eyebrow")}</p>
              <h2 className="shots-title">
                {t("game.shots.title")}{" "}
                <span className="shots-title-pink">
                  {t("game.shots.titlePink")}
                </span>
              </h2>
            </div>

            <p className="shots-paragraph">{t("game.shots.text")}</p>
          </div>

          <div className="shots-cards">
            {SHOTS.map((item, i) => (
              <div
                key={item.key}
                className={`shots-card ${item.pink ? "shots-card-active" : ""}`}
              >
                <div className="shots-card-image-wrap">
                  <img
                    src={item.image}
                    alt={t(`game.shots.items.${item.key}`)}
                    className="shots-card-image"
                  />
                </div>

                <div className="shots-card-body">
                  <span className="shots-card-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="shots-card-title">
                    {t(`game.shots.items.${item.key}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Download (Your Next Match Starts Here.) ---------- */}
      <section className="download-section">
        <img src="/images/download-bg.png" alt="" className="download-bg" />
        <div className="download-overlay" />

        <div className="download-container">
          <div className="download-content">
            <p className="download-eyebrow">{t("game.download.eyebrow")}</p>

            <h2 className="download-title">
              {t("game.download.title1")}
              <br />
              <span className="download-title-pink">
                {t("game.download.titlePink")}
              </span>
            </h2>

            <p className="download-text">{t("game.download.text")}</p>

            <div className="download-stores">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="download-store"
              >
                <img
                  src="/images/app-store.png"
                  alt="Download on the App Store"
                  className="download-store-img"
                />
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="download-store"
              >
                <img
                  src="/images/google-play.png"
                  alt="Get it on Google Play"
                  className="download-store-img"
                />
              </a>
            </div>

            <p className="download-note">{t("game.download.note")}</p>
          </div>
        </div>
      </section>
    </>
  );
}