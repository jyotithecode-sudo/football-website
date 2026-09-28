import { useState } from "react";

const ALL_NEWS = [
  { id: 1, title: "FL2026 Summer Update\nBrings the International Cup", date: "Jul 10, 2026", image: "/images/news-1.png" },
  { id: 2, title: "Tips to Improve Your Skills\nin FL2026", date: "Jul 2, 2026", image: "/images/news-2.png" },
  { id: 3, title: "Join Our Global Community", date: "Jul 25, 2026", image: "/images/news-3.png" },
  { id: 4, title: "New Stadiums Added\nto Global Leagues", date: "Jun 28, 2026", image: "/images/news-1.png" },
  { id: 5, title: "Pro Tips: Mastering\nFree Kicks", date: "Jun 20, 2026", image: "/images/news-2.png" },
  { id: 6, title: "Community Tournament\nWinners Announced", date: "Jun 15, 2026", image: "/images/news-3.png" },
  { id: 7, title: "Build Your Dream Team:\nSeason Guide", date: "Jun 8, 2026", image: "/images/news-1.png" },
  { id: 8, title: "Behind the Scenes of\nFL2026", date: "Jun 1, 2026", image: "/images/news-2.png" },
  { id: 9, title: "Official Merch Now\nAvailable", date: "May 25, 2026", image: "/images/news-3.png" },
];

const STEP = 3;

export default function NewsPage() {
  const [visible, setVisible] = useState(STEP);

  return (
    <section className="news-page">
      <div className="news-page-inner">
        <div className="news-page-head">
          <p className="eyebrow eyebrow-pink">NEWS &amp; COMMUNITY</p>
          <h1 className="section-title">
            ALL <span className="text-pink">NEWS</span>
          </h1>
          <p className="section-text">
            Game updates, events and stories from around the world.
          </p>
        </div>

        <div className="news-grid">
          {ALL_NEWS.slice(0, visible).map((n) => (
            <article key={n.id} className="news-card">
              <img src={n.image} alt="" className="news-thumb" />
              <div className="news-body">
                <h3 className="news-title">{n.title}</h3>
                <p className="news-date">{n.date}</p>
              </div>
            </article>
          ))}
        </div>

        {visible < ALL_NEWS.length && (
          <div className="load-more-wrap">
            <button
              className="btn-primary load-more"
              onClick={() => setVisible((v) => v + STEP)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}