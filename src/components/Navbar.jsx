import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Game", path: "/game" },
  { label: "Features", path: "/features" },
  { label: "Community", path: "/community" },
  { label: "Shop", path: "/shop" },
  { label: "News", path: "/news" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="lang-btn">
            <span className="lang-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F4F4F4" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <ellipse cx="12" cy="12" rx="4.5" ry="10" />
                <path d="M2 12h20" />
              </svg>
            </span>{" "}
            EN
            <span>
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1L5.5 5.5L10 1" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <button className="btn-primary">Play Now</button>
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
              {l.label}
            </NavLink>
          ))}
          <button className="btn-primary btn-full">Play Now</button>
        </div>
      )}
    </header>
  );
}