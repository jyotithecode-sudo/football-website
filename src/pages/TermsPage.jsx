import React from "react";
import { useTranslation } from "react-i18next";
import "../LegalPage.css";

const EMAIL = "support@footballleaguegame.com";

export default function TermsPage() {
  const { t } = useTranslation();

  const sections = t("terms.sections", { returnObjects: true });

  return (
    <section className="legal-section">
      <div className="legal-container">
        <header className="legal-header">
          <p className="legal-eyebrow">{t("terms.eyebrow")}</p>
          <h1 className="legal-title">
            {t("terms.title")}{" "}
            <span className="legal-title-pink">{t("terms.titlePink")}</span>
          </h1>
        </header>

        <div className="legal-body">
          {Array.isArray(sections) &&
            sections.map((s, i) => (
              <article key={i} className="legal-block">
                <h2 className="legal-block-title">{s.h}</h2>

                {s.p &&
                  s.p.map((text, j) => (
                    <p key={j} className="legal-text">
                      {text}
                    </p>
                  ))}

                {s.list && (
                  <ul className="legal-list">
                    {s.list.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                )}

                {s.after &&
                  s.after.map((text, j) => (
                    <p key={j} className="legal-text">
                      {text}
                    </p>
                  ))}

                {s.email && (
                  <p className="legal-text">
                    <a href={`mailto:${EMAIL}`} className="legal-link">
                      {EMAIL}
                    </a>
                  </p>
                )}
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}