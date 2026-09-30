import React from "react";
import "../App.css";
import "../FeaturesPage.css";


const CARDS = [
  { image: "/images/feature-stadium.jpg", label: "Stadium & Atmosphere" },
  { image: "/images/feature-gameplay.jpg", label: "Gameplay" },
  { image: "/images/feature-tactics.jpg", label: "Tactics" },
];

export default function FeaturesPage() {
  return (
    <section className="custom-features-section">
      <div className="page-inner features-hero">
        <img
          src="/images/features-hero-bg.png"
          alt="Player in a stadium"
          className="features-hero-bg"
        />

        <div className="features-hero-overlay" />

        <div className="features-hero-content">
          <p className="eyebrow eyebrow-pink">FEATURES</p>

          <h1 className="hero-title">
            DEPTH. STYLE.
            <br />
            <span className="text-pink">CONTROL.</span>
          </h1>

          <p className="intro-text">
            Built for football fans who crave depth, style and control.
          </p>
        </div>
      </div>
    </section>
  );
}