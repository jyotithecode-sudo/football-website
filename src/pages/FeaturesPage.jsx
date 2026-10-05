import React from "react";
import { useTranslation } from "react-i18next";
import "../App.css";
import "../FeaturesPage.css";

const CARDS = [
  { image: "/images/feature-stadium.png", key: "stadium", badge: true },
  { image: "/images/feature-gameplay.png", key: "controls", badge: false },
  { image: "/images/feature-tactics.png", key: "tactics", badge: true },
];

const MODES = ["m1", "m2", "m3", "m4"];
const EVENTS = ["e1", "e2", "e3"];

const DATABASE = [
  { image: "/images/database-1.png", key: "d1" },
  { image: "/images/database-2.png", key: "d2" },
  { image: "/images/database-3.png", key: "d3" },
];

export default function FeaturesPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="custom-features-section">
        <div className="page-inner features-hero">
          <img
            src="/images/features-hero-bg.png"
            alt=""
            className="features-hero-bg"
          />
          <div className="features-hero-overlay" />

          <div className="features-hero-content">
            <p className="eyebrow eyebrow-pink">{t("features.heroEyebrow")}</p>
            <h1 className="hero-title">
              {t("features.heroTitle1")}
              <br />
              <span className="text-pink">{t("features.heroTitlePink")}</span>
            </h1>
            <p className="intro-text">{t("features.heroText")}</p>
          </div>
        </div>
      </section>

      {/* ---------- Immersive match experience ---------- */}
      <section className="custom-match-intro-section">
        <div className="page-inner match-intro">
          <div className="match-intro-inner">
            <div className="match-intro-text">
              <p className="eyebrow eyebrow-pink">{t("features.match.eyebrow")}</p>
              <h2 className="section-title">
                {t("features.match.title")}{" "}
                <span className="text-pink">{t("features.match.titlePink")}</span>
              </h2>
            </div>
            <p className="intro-text match-intro-paragraph">
              {t("features.match.text")}
            </p>
          </div>

          <div className="feature-cards">
            {CARDS.map((card) => (
              <div key={card.key} className="feature-card">
                <div className="feature-card-image-wrap">
                  <img
                    src={card.image}
                    alt={t(`features.cards.${card.key}.title`)}
                    className="feature-card-image"
                  />
                  {card.badge && <span className="feature-card-badge">✓</span>}
                </div>
                <div className="content-box">
                  <p className="feature-card-tag">
                    {t(`features.cards.${card.key}.tag`)}
                  </p>
                  <h3 className="feature-card-title">
                    {t(`features.cards.${card.key}.title`)}
                  </h3>
                  <p className="feature-card-desc">
                    {t(`features.cards.${card.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Modes (Play Your Way) ---------- */}
      <section className="modes-section">
        <div className="modes-container">
          <div className="modes-header">
            <div className="modes-heading">
              <p className="modes-eyebrow">{t("features.modes.eyebrow")}</p>
              <h2 className="modes-title">
                {t("features.modes.title")}{" "}
                <span className="modes-title-pink">
                  {t("features.modes.titlePink")}
                </span>
              </h2>
            </div>
            <p className="modes-paragraph">{t("features.modes.text")}</p>
          </div>

          <div className="modes-cards">
            {MODES.map((key, i) => (
              <div key={key} className="modes-card">
                <span className="modes-card-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="modes-card-title">
                  {t(`features.modes.items.${key}.title`)}
                </h3>
                <p className="modes-card-desc">
                  {t(`features.modes.items.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Events (Dynamic Every Day) ---------- */}
      <section className="events-section">
        <div className="events-container">
          <div className="events-content">
            <div className="events-heading">
              <p className="events-eyebrow">{t("features.events.eyebrow")}</p>
              <h2 className="events-title">{t("features.events.title")}</h2>
            </div>

            <ul className="events-list">
              {EVENTS.map((key) => (
                <li key={key} className="events-item">
                  <span className="events-item-icon" />
                  <p className="events-item-text">
                    <strong>{t(`features.events.items.${key}.bold`)}</strong>{" "}
                    {t(`features.events.items.${key}.text`)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="events-image-wrap">
            <img
              src="/images/events-gameplay.png"
              alt=""
              className="events-image"
            />
          </div>
        </div>
      </section>

      {/* ---------- Database (Your Players. Your World.) ---------- */}
      <section className="database-section">
        <div className="database-container">
          <div className="database-header">
            <div className="database-heading">
              <p className="database-eyebrow">{t("features.database.eyebrow")}</p>
              <h2 className="database-title">
                {t("features.database.title1")}
                <br />
                <span className="database-title-pink">
                  {t("features.database.titlePink")}
                </span>
              </h2>
            </div>
            <p className="database-paragraph">{t("features.database.text")}</p>
          </div>

          <div className="database-cards">
            {DATABASE.map((item) => (
              <div key={item.key} className="database-card">
                <div className="database-card-image-wrap">
                  <img
                    src={item.image}
                    alt={t(`features.database.items.${item.key}.title`)}
                    className="database-card-image"
                  />
                </div>
                <div className="database-card-body">
                  <p className="database-card-tag">
                    {t(`features.database.items.${item.key}.tag`)}
                  </p>
                  <h3 className="database-card-title">
                    {t(`features.database.items.${item.key}.title`)}
                  </h3>
                  <p className="database-card-desc">
                    {t(`features.database.items.${item.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}