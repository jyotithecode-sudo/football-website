import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../CommunityPage.css";

const DISCORD_LINK = "https://discord.com/invite/m825ft9xGn";
const FACEBOOK_LINK = "https://facebook.com"; // apna asli Facebook page link daalo
const INSTAGRAM_LINK = "https://instagram.com"; // apna asli Instagram page link daalo

const SOCIALS = [
  {
    key: "discord",
    name: "Discord",
    icon: "/images/icon-discord.png",
    href: DISCORD_LINK,
    primary: true,
  },
  {
    key: "facebook",
    name: "Facebook",
    icon: "/images/icon-facebook.png",
    href: FACEBOOK_LINK,
    primary: false,
  },
  {
    key: "instagram",
    name: "Instagram",
    icon: "/images/icon-instagram.png",
    href: INSTAGRAM_LINK,
    primary: false,
  },
];

const ACTIONS = [
  { key: "a1", image: "/images/news-2.png", href: "#", big: true },
  { key: "a2", image: "/images/news-2.png", href: DISCORD_LINK, big: false },
  { key: "a3", image: "/images/news-2.png", href: "#", big: false },
];

export default function CommunityPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="community-hero">
        <img
          src="/images/community-hero-bg.png"
          alt=""
          className="community-hero-bg"
        />

        <div className="community-hero-overlay" />

        <div className="community-hero-container">
          <div className="community-hero-content">
            <p className="community-hero-eyebrow">
              {t("community.hero.eyebrow")}
            </p>

            <h1 className="community-hero-title">
              {t("community.hero.title1")}
              <br />
              <span className="community-hero-title-pink">
                {t("community.hero.titlePink")}
              </span>
            </h1>

            <p className="community-hero-text">{t("community.hero.text")}</p>

            <div className="community-hero-actions">
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noreferrer"
                className="community-hero-btn"
              >
                {t("community.joinDiscord")}
              </a>

              <Link to="/features" className="community-hero-link">
                {t("community.hero.explore")}
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
              <p className="social-eyebrow">{t("community.social.eyebrow")}</p>
              <h2 className="social-title">
                {t("community.social.title")}{" "}
                <span className="social-title-pink">
                  {t("community.social.titlePink")}
                </span>
              </h2>
            </div>

            <p className="social-paragraph">{t("community.social.text")}</p>
          </div>

          <div className="social-cards">
            {SOCIALS.map((item) => (
              <div
                key={item.key}
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

                <p className="social-card-desc">
                  {t(`community.social.items.${item.key}.desc`)}
                </p>

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
                  {t(`community.social.items.${item.key}.btn`)}
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
              <p className="action-eyebrow">{t("community.action.eyebrow")}</p>
              <h2 className="action-title">
                {t("community.action.title")}{" "}
                <span className="action-title-pink">
                  {t("community.action.titlePink")}
                </span>
              </h2>
            </div>

            <p className="action-paragraph">{t("community.action.text")}</p>
          </div>

          <div className="action-grid">
            {ACTIONS.map((item) => (
              <div
                key={item.key}
                className={`action-card ${item.big ? "action-card-big" : ""}`}
              >
                <img
                  src={item.image}
                  alt={t(`community.action.items.${item.key}.title`)}
                  className="action-card-image"
                />
                <div className="action-card-overlay" />

                <div className="action-card-content">
                  <h3 className="action-card-title">
                    {t(`community.action.items.${item.key}.title`)}
                  </h3>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="action-card-link"
                  >
                    {t(`community.action.items.${item.key}.link`)}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA (Same Game. More Connections.) ---------- */}
      <section className="cta-section">
        <img src="/images/cta-bg.png" alt="" className="cta-bg" />

        <div className="cta-container">
          <div className="cta-content">
            <p className="cta-eyebrow">{t("community.cta.eyebrow")}</p>

            <h2 className="cta-title">
              {t("community.cta.title1")}
              <br />
              <span className="cta-title-pink">
                {t("community.cta.titlePink")}
              </span>
            </h2>

            <p className="cta-text">{t("community.cta.text")}</p>
          </div>

          <div className="cta-actions">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
            >
              {t("community.joinDiscord")}
            </a>

            <div className="cta-links">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noreferrer"
                className="cta-link"
              >
                Facebook
              </a>
              <a
                href={INSTAGRAM_LINK}
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