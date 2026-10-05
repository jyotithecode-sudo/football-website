import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../i18n/languages";

const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "game", path: "/game" },
  { key: "features", path: "/features" },
  { key: "community", path: "/community" },
  { key: "shop", path: "/shop" },
  { key: "news", path: "/news" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
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
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img
            src="/images/football-logo.png"
            alt="Football League 2026"
            className="logo-badge"
          />
        </Link>

        <nav className="nav-links">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
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
              <ul className="lang-menu" role="listbox">
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

          <button className="btn-primary" herf="/shop">{t("nav.playNow")}</button>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `mobile-link ${isActive ? "mobile-link-active" : ""}`
              }
            >
              {t(`nav.${l.key}`)}
            </NavLink>
          ))}

          <div className="mobile-langs">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                className={`mobile-lang ${
                  l.code === current.code ? "mobile-lang-active" : ""
                }`}
                onClick={() => {
                  changeLanguage(l.code);
                  setOpen(false);
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button className="btn-primary btn-full">{t("nav.playNow")}</button>
        </div>
      )}
    </header>
  );
}