import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FILTERS, NEWS } from "../newsData";
import "../NewsPage.css";

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("All");

  const list =
    active === "All" ? NEWS : NEWS.filter((n) => n.category === active);

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(i18n.language, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="news-hero">
        <img src="/images/news-hero-bg.png" alt="" className="news-hero-bg" />
        <img
          src="/images/news-hero-overlay.png"
          alt=""
          className="news-hero-overlay"
        />

        <div className="news-hero-container">
          <div className="news-hero-content">
            <p className="news-hero-eyebrow">{t("news.hero.eyebrow")}</p>

            <h1 className="news-hero-title">
              {t("news.hero.title1")}
              <br />
              <span className="news-hero-title-pink">
                {t("news.hero.titlePink")}
              </span>
            </h1>

            <p className="news-hero-text">{t("news.hero.text")}</p>
          </div>
        </div>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-card">
            <div className="featured-image-wrap">
              <img
                src="/images/featured-news.png"
                alt=""
                className="featured-image"
              />
              <div className="featured-image-fade" />
            </div>

            <div className="featured-content">
              <p className="featured-eyebrow">{t("news.featured.eyebrow")}</p>

              <h2 className="featured-title">
                {t("news.featured.title1")}
                <br />
                <span className="featured-title-pink">
                  {t("news.featured.titlePink")}
                </span>
              </h2>

              <p className="featured-text">{t("news.featured.text")}</p>

              <Link to="/news/1" className="featured-btn">
                {t("news.featured.btn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- From the League ---------- */}
      <section className="league-section">
        <div className="league-container">
          <div className="league-head">
            <h2 className="league-title">
              {t("news.league.title")}{" "}
              <span className="league-title-pink">
                {t("news.league.titlePink")}
              </span>
            </h2>

            <div className="league-filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`league-filter ${
                    active === f ? "league-filter-active" : ""
                  }`}
                  onClick={() => setActive(f)}
                >
                  {t(`news.filters.${f}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="league-grid">
            {list.map((n) => (
              <Link key={n.id} to={`/news/${n.id}`} className="league-card">
                <div className="league-card-image-wrap">
                  <img
                    src={n.image}
                    alt={t(`news.titles.${n.titleKey}`)}
                    className="league-card-image"
                  />
                  <div className="league-card-fade" />
                </div>

                <div className="league-card-body">
                  <div className="league-card-meta">
                    <span className="league-card-tag">
                      {t(`news.filters.${n.category}`)}
                    </span>
                    <span className="league-card-date">
                      {formatDate(n.date)}
                    </span>
                  </div>

                  <h3 className="league-card-title">
                    {t(`news.titles.${n.titleKey}`)}
                  </h3>
                  <p className="league-card-desc">
                    {t(`news.bodies.${n.bodyKey}.desc`)}
                  </p>

                  <span className="league-card-link">
                    {t("news.league.link")}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="league-more">
            <Link to="/news" className="league-more-btn">
              {t("news.league.archive")}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA (The Game Continues.) ---------- */}
      <section className="cont-section">
        <img src="/images/cont-bg.png" alt="" className="cont-bg" />
        <div className="cont-fade" />

        <div className="cont-container">
          <div className="cont-content">
            <p className="cont-eyebrow">{t("news.cta.eyebrow")}</p>

            <h2 className="cont-title">
              {t("news.cta.title")}{" "}
              <span className="cont-title-pink">{t("news.cta.titlePink")}</span>
            </h2>

            <p className="cont-text">{t("news.cta.text")}</p>

            <Link to="/community" className="cont-btn">
              {t("news.cta.btn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}