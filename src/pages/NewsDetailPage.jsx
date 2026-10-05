import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NEWS } from "../newsData";
import "../NewsPage.css";

export default function NewsDetailPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const article = NEWS.find((n) => String(n.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <section className="article-section">
        <div className="article-container">
          <div className="article-card">
            <Link to="/news" className="article-back">
              <span>←</span> {t("news.article.back")}
            </Link>
            <h1 className="article-title">{t("news.article.notFound")}</h1>
          </div>
        </div>
      </section>
    );
  }

  const paragraphs = t(`news.bodies.${article.bodyKey}.content`, {
    returnObjects: true,
  });
  const title = t(`news.titles.${article.titleKey}`);

  return (
    <section className="article-section">
      <div className="article-container">
        <article className="article-card">
          <Link to="/news" className="article-back">
            <span>←</span> {t("news.article.back")}
          </Link>

          <h1 className="article-title">{title}</h1>

          <img src={article.image} alt={title} className="article-image" />

          <div className="article-text">
            {Array.isArray(paragraphs) &&
              paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>
      </div>
    </section>
  );
}