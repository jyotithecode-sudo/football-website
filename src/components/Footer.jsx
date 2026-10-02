import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";

const FOOTER_LINKS = [
  { key: "game", path: "/game" },
  { key: "features", path: "/features" },
  { key: "community", path: "/community" },
  { key: "shop", path: "/shop" },
  { key: "news", path: "/news" },
];

const LEGAL_LINKS = [
  { key: "privacy", path: "/privacy" },
  { key: "terms", path: "/terms" },
  { key: "support", path: "/support" },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const current =
    LANGUAGES.find((l) => l.code === i18n.language.split("-")[0]) ||
    LANGUAGES[0];

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <Link to="/" className="logo">
            <img
              src="/images/football-logo.png"
              alt="Football League 2026"
              className="logo-badge"
            />
          </Link>

          <nav className="footer-links">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.path} to={l.path} className="footer-link">
                {t(`nav.${l.key}`)}
              </Link>
            ))}
          </nav>

          <div className="footer-actions">
            <a href="#" aria-label="YouTube" className="social-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" className="social-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a href="#" aria-label="X" className="social-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a href="#" aria-label="TikTok" className="social-btn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            <div className="lang-wrap" ref={langRef}>
              <button
                type="button"
                className="lang-btn"
                onClick={() => setLangOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <span className="lang-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4F4F4" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="10" />
                    <ellipse cx="12" cy="12" rx="4.5" ry="10" />
                    <path d="M2 12h20" />
                  </svg>
                </span>{" "}
                {current.code.toUpperCase()}
                <span className={`lang-arrow ${langOpen ? "lang-arrow-open" : ""}`}>
                  <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                    <path d="M1 1L5.5 5.5L10 1" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              {langOpen && (
                <ul className="lang-menu lang-menu-up" role="listbox">
                  {LANGUAGES.map((l) => (
                    <li key={l.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={l.code === current.code}
                        className={`lang-option ${
                          l.code === current.code ? "lang-option-active" : ""
                        }`}
                        onClick={() => changeLanguage(l.code)}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{t("footer.copyright")}</p>
          <div className="legal-links">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.path} to={l.path} className="legal-link">
                {t(`footer.${l.key}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}