import React from "react";
import "../ShopPage.css";

// Client se existing Spreadshop ka asli link lekar yahan daalo
const SPREADSHOP_URL = "https://your-store.myspreadshop.com";

const COLLECTIONS = [
  {
    image: "/images/shop-tshirts.png",
    title: "T-SHIRTS",
    href: `${SPREADSHOP_URL}`, // chaho to category link: `${SPREADSHOP_URL}/t-shirts`
  },
  {
    image: "/images/shop-hoodies.png",
    title: "HOODIES",
    href: `${SPREADSHOP_URL}`,
  },
  {
    image: "/images/shop-accessories.png",
    title: "ACCESSORIES",
    href: `${SPREADSHOP_URL}`,
  },
];

export default function ShopPage() {
  return (
    <>
      {/* ---------- Hero (Wear the Game.) ---------- */}
      <section className="shop-hero">
        <div className="shop-hero-container">
          <div className="shop-hero-content">
            <p className="shop-hero-eyebrow">GAME FEATURES</p>

            <h1 className="shop-hero-title">
              WEAR
              <br />
              <span className="shop-hero-title-pink">THE GAME.</span>
            </h1>

            <p className="shop-hero-text">
              Official Football League 2026 merchandise on Spreadshop.
            </p>
          </div>

          <img
            src="/images/tshirt.png"
            alt="Football League 2026 t-shirt, hoodie and cap"
            className="shop-hero-products"
          />

          <img
            src="/images/merch-marker.png"
            alt=""
            className="shop-hero-slogan"
          />
        </div>
      </section>

      {/* ---------- Collection (Matchday. Everyday.) ---------- */}
      <section className="collection-section">
        <img src="/images/collection-bg.png" alt="" className="collection-bg" />
        <div className="collection-fade" />

        <div className="collection-container">
          <div className="collection-header">
            <p className="collection-eyebrow">EXPLORE THE COLLECTION</p>
            <h2 className="collection-title">
              MATCHDAY. <span className="collection-title-pink">EVERYDAY.</span>
            </h2>
            <p className="collection-text">
              Discover your next favourite in the Football League store.
            </p>
          </div>

          <div className="collection-cards">
            {COLLECTIONS.map((item) => (
              <div key={item.title} className="collection-card">
                <div className="collection-card-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="collection-card-image"
                  />
                </div>

                <div className="collection-card-body">
                  <h3 className="collection-card-title">{item.title}</h3>
                  <span className="collection-card-line" />

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collection-card-btn"
                  >
                    Explore on spreadshop
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}