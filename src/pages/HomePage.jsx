import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const STATS = ["s1", "s2", "s3", "s4"];

const PILLARS = [
  { key: "play", accent: "pink", image: "/images/play.png" },
  { key: "compete", accent: "teal", image: "/images/compete.png" },
  { key: "build", accent: "pink", image: "/images/build.png" },
];

const NEWS = [
  { key: "n1", date: "2026-07-10", image: "/images/news-1.png" },
  { key: "n2", date: "2026-07-02", image: "/images/news-2.png" },
  { key: "n3", date: "2026-07-25", image: "/images/news-3.png" },
];

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <img
        src="/images/hero-bg.png"
        alt="Player holding a football in a stadium"
        className="hero-bg"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow">{t("home.hero.eyebrow")}</p>
        <h1 className="hero-title">
          {t("home.hero.line1")}
          <br />
          <span className="text-pink">{t("home.hero.pink")}</span>{" "}
          {t("home.hero.rest")}
        </h1>
        <p className="hero-subtitle">{t("home.hero.subtitle")}</p>
        <div className="divider" />

        <dl className="stats">
          {STATS.map((key) => (
            <div key={key} className="stat">
              <dt className="stat-value">{t(`home.stats.${key}.value`)}</dt>
              <dd className="stat-label">{t(`home.stats.${key}.label`)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <img
        src="/images/same-passion-bigger-tomorrow.png"
        alt="Same Passion Bigger Tomorrow"
        className="hero-marker"
      />
    </section>
  );
}

function Pillars() {
  const { t } = useTranslation();

  return (
    <section className="pillars">
      <div className="pillars-grid">
        {PILLARS.map((p) => (
          <div
            key={p.key}
            className="pillar-card"
            style={{
              backgroundImage: `linear-gradient(
                to top,
                rgba(15,23,42,0.65) 0%,
                rgba(0,0,0,0.30) 35%,
                rgba(0,0,0,0.05) 70%,
                transparent 100%
              ), url(${p.image})`,
            }}
          >
            <h3 className="pillar-title">{t(`home.pillars.${p.key}.title`)}</h3>
            <p className="pillar-subtitle">
              {t(`home.pillars.${p.key}.subtitle`)}
            </p>
            <div className={`pillar-underline underline-${p.accent}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function GameFeatures() {
  const { t } = useTranslation();

  return (
    <section className="features">
      <img src="/images/features.png" alt="" className="features-bg" />
      <div className="features-inner">
        <div className="features-text">
          <p className="eyebrow eyebrow-pink">{t("home.features.eyebrow")}</p>
          <h2 className="section-title">
            {t("home.features.title1")}
            <br />
            <span className="text-pink">{t("home.features.titlePink")}</span>
          </h2>
          <p className="section-text">{t("home.features.text")}</p>
        </div>

        <div className="devices-mock">
          <img
            src="/images/devices-mockup.png"
            alt="Gameplay on tablet and phone"
            className="devices-image"
          />
          <img
            src="/images/play-anywhere-anytime.png"
            alt="Play Anywhere Anytime"
            className="play-anywhere-graphic"
          />
        </div>
      </div>
    </section>
  );
}

function Merch() {
  const { t } = useTranslation();

  return (
    <section className="merch">
      <div className="merch-inner">
        <div className="merch-text">
          <p className="eyebrow eyebrow-muted">{t("home.merch.eyebrow")}</p>
          <h2 className="section-title section-title-dark">
            {t("home.merch.title1")}
            <br />
            {t("home.merch.title2")}
          </h2>
          <p className="section-text section-text-dark">
            {t("home.merch.text")}
          </p>
        </div>

        <img
          src="/images/tshirt.png"
          alt="FL 2026 T-shirt, Play Anywhere hoodie and Crown cap"
          className="merch-products"
        />

        <img
          src="/images/merch-marker.png"
          alt="Same Passion Bigger Tomorrow"
          className="merch-marker"
        />
      </div>
    </section>
  );
}

function News() {
  const { t, i18n } = useTranslation();

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(i18n.language, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="news">
      <div className="news-inner">
        <div className="news-header">
          <div className="news-text">
            <p className="eyebrow eyebrow-pink">{t("home.news.eyebrow")}</p>
            <h2 className="section-title">
              {t("home.news.title1")}
              <br />
              <span className="text-pink">{t("home.news.titlePink")}</span>
            </h2>
            <p className="section-text">{t("home.news.text")}</p>
          </div>
          <Link to="/news" className="view-all">
            {t("home.news.viewAll")} <span>→</span>
          </Link>
        </div>

        <div className="news-grid">
          {NEWS.map((n) => (
            <article key={n.key} className="news-card">
              <img src={n.image} alt="" className="news-thumb" />
              <div className="news-body">
                <h3 className="news-title">
                  {t(`home.news.items.${n.key}.title`)}
                </h3>
                <p className="news-date">{formatDate(n.date)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <GameFeatures />
      <Merch />
      <News />
    </>
  );
}