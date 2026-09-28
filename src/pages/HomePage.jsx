import { Link } from "react-router-dom";

const STATS = [
  { value: "100M+", label: "Downloads" },
  { value: "200+", label: "Countries" },
  { value: "4.7★", label: "App Rating" },
  { value: "Millions", label: "of Players" },
];

const PILLARS = [
  { title: "PLAY", subtitle: "Fast. Fluid. Fun.", accent: "pink", image: "/images/play.png" },
  { title: "COMPETE", subtitle: "Global leagues. Real rewards.", accent: "teal", image: "/images/compete.png" },
  { title: "BUILD", subtitle: "Create your dream team.", accent: "pink", image: "/images/build.png" },
];

const NEWS = [
  { title: "FL2026 Summer Update Brings the International Cup", date: "Jul 10, 2026", image: "/images/news-1.png" },
  { title: "Tips to Improve Your Skills in FL2026", date: "Jul 2, 2026", image: "/images/news-2.png" },
  { title: "Join Our Global Community", date: "Jul 25, 2026", image: "/images/news-3.png" },
];

function Hero() {
  return (
    <section className="hero">
      <img
        src="/images/hero-bg.png"
        alt="Player holding a football in a stadium"
        className="hero-bg"
      />
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow">REAL PLAYERS. REAL MATCHES.</p>
        <h1 className="hero-title">
          FOOTBALL
          <br />
          <span className="text-pink">LIVES</span> HERE
        </h1>
        <p className="hero-subtitle">A GLOBAL GAME FOR EVERYONE.</p>
        <div className="divider" />

        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <dt className="stat-value">{s.value}</dt>
              <dd className="stat-label">{s.label}</dd>
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
  return (
    <section className="pillars">
      <div className="pillars-grid">
        {PILLARS.map((p) => (
          <div
            key={p.title}
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
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-subtitle">{p.subtitle}</p>
            <div className={`pillar-underline underline-${p.accent}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function GameFeatures() {
  return (
    <section className="features">
      <img src="/images/features.png" alt="" className="features-bg" />
      <div className="features-inner">
        <div className="features-text">
          <p className="eyebrow eyebrow-pink">GAME FEATURES</p>
          <h2 className="section-title">
            MORE WAYS
            <br />
            <span className="text-pink">TO PLAY</span>
          </h2>
          <p className="section-text">
            Multiple game modes, real teams and players, and a true to life
            football experience — anytime, anywhere.
          </p>
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
  return (
    <section className="merch">
      <div className="merch-inner">
        <div className="merch-text">
          <p className="eyebrow eyebrow-muted">GAME FEATURES</p>
          <h2 className="section-title section-title-dark">
            WEAR
            <br />
            THE GAME
          </h2>
          <p className="section-text section-text-dark">
            Official Football League 2026 merchandise on Spreadshop.
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
  return (
    <section className="news">
      <div className="news-inner">
        <div className="news-header">
          <div className="news-text">
            <p className="eyebrow eyebrow-pink">NEWS &amp; COMMUNITY</p>
            <h2 className="section-title">
              STAY IN
              <br />
              <span className="text-pink">THE GAME</span>
            </h2>
            <p className="section-text">
              Game updates, events and stories from around the world.
            </p>
          </div>
          <Link to="/news" className="view-all">
            View All News <span>→</span>
          </Link>
        </div>

        <div className="news-grid">
          {NEWS.map((n) => (
            <article key={n.title} className="news-card">
              <img src={n.image} alt="" className="news-thumb" />
              <div className="news-body">
                <h3 className="news-title">{n.title}</h3>
                <p className="news-date">{n.date}</p>
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