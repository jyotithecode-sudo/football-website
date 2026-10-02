import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { NEWS } from "../newsData";
import "../NewsPage.css";

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = NEWS.find((n) => String(n.id) === id);

  // Page khulte hi upar se shuru ho
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <section className="article-section">
        <div className="article-container">
          <div className="article-card">
            <Link to="/news" className="article-back">
              <span>←</span> Back to all news
            </Link>
            <h1 className="article-title">ARTICLE NOT FOUND</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="article-section">
      <div className="article-container">
        <article className="article-card">
          <Link to="/news" className="article-back">
            <span>←</span> Back to all news
          </Link>

          <h1 className="article-title">{article.title}</h1>

          <img src={article.image} alt={article.title} className="article-image" />

          <div className="article-text">
            {article.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}