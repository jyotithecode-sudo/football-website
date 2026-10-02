import { useState } from "react";
import { Link } from "react-router-dom";
import { FILTERS, NEWS } from "../newsData";
import "../NewsPage.css";

export default function NewsPage() {
  const [active, setActive] = useState("All");

  const list =
    active === "All" ? NEWS : NEWS.filter((n) => n.category === active);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="news-hero">
        <img
          src="/images/news-hero-bg.png"
          alt="Stadium under floodlights"
          className="news-hero-bg"
        />
        <img
          src="/images/news-hero-overlay.png"
          alt=""
          className="news-hero-overlay"
        />

        <div className="news-hero-container">
          <div className="news-hero-content">
            <p className="news-hero-eyebrow">FOOTBALL LEAGUE 2026 / NEWS</p>

            <h1 className="news-hero-title">
              STAY IN
              <br />
              <span className="news-hero-title-pink">THE GAME.</span>
            </h1>

            <p className="news-hero-text">
              Game updates, new features, events, and announcements.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Featured (New Clubs. Same Passion.) ---------- */}
      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-card">
            <div className="featured-image-wrap">
              <img
                src="/images/featured-news.png"
                alt="Manchester City players celebrating"
                className="featured-image"
              />
              <div className="featured-image-fade" />
            </div>

            <div className="featured-content">
              <p className="featured-eyebrow">FEATURED ANNOUNCEMENT</p>

              <h2 className="featured-title">
                NEW CLUBS.
                <br />
                <span className="featured-title-pink">SAME PASSION.</span>
              </h2>

              <p className="featured-text">
                Manchester City and AS Monaco arrive with authentic club
                content. Take the season on in club colors.
              </p>

              <Link to="/news/1" className="featured-btn">
                View announcement
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
              FROM THE <span className="league-title-pink">LEAGUE.</span>
            </h2>

            <div className="league-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className={`league-filter ${
                    active === f.value ? "league-filter-active" : ""
                  }`}
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
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
                    alt={n.title}
                    className="league-card-image"
                  />
                  <div className="league-card-fade" />
                </div>

                <div className="league-card-body">
                  <div className="league-card-meta">
                    <span className="league-card-tag">{n.category}</span>
                    <span className="league-card-date">{n.date}</span>
                  </div>

                  <h3 className="league-card-title">{n.title}</h3>
                  <p className="league-card-desc">{n.desc}</p>

                  <span className="league-card-link">
                    View official announcement
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="league-more">
            <Link to="/news" className="league-more-btn">
              Explore the news archive
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
      <p className="cont-eyebrow">FOOTBALL LEAGUE 2026</p>

      <h2 className="cont-title">
        THE GAME <span className="cont-title-pink">CONTINUES.</span>
      </h2>

      <p className="cont-text">Join the Football League community.</p>

      <Link to="/community" className="cont-btn">
        Join community
      </Link>
    </div>
  </div>
</section>
    </>
  );
}