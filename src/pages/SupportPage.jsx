import React from "react";
import { useTranslation } from "react-i18next";
import "../LegalPage.css";

const EMAIL = "support@footballleaguegame.com";
const SECTIONS = ["privacy", "cookies", "licensing"];

export default function LegalContent({ eyebrow, title, titlePink }) {
  const { t } = useTranslation();

  return (
    <section className="legal-section">
      <div className="legal-container">
        <header className="legal-header">
          <p className="legal-eyebrow">{eyebrow}</p>
          <h1 className="legal-title">
            {title}{" "}
            <span className="legal-title-pink">{titlePink}</span>
          </h1>
        </header>

        <div className="legal-body">
          {SECTIONS.map((key) => {
            const blocks = t(`legal.sections.${key}.blocks`, {
              returnObjects: true,
            });

            return (
              <article key={key} id={key} className="legal-block">
                <h2 className="legal-block-title">
                  {t(`legal.sections.${key}.title`)}
                </h2>

                {Array.isArray(blocks) &&
                  blocks.map((b, i) => (
                    <div key={i} className="legal-item">
                      <h3 className="legal-item-title">{b.h}</h3>

                      {b.p && <p className="legal-text">{b.p}</p>}

                      {b.list && (
                        <ul className="legal-list">
                          {b.list.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      )}

                      {b.after && <p className="legal-text">{b.after}</p>}

                      {b.email && (
                        <p className="legal-text">
                          <a href={`mailto:${EMAIL}`} className="legal-link">
                            {EMAIL}
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}