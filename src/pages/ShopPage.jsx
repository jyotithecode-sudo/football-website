import React from "react";
import { useTranslation } from "react-i18next";
import "../ShopPage.css";

// Client se existing Spreadshop ka asli link lekar yahan daalo
const SPREADSHOP_URL = "https://your-store.myspreadshop.com";

const COLLECTIONS = [
  {
    key: "tshirts",
    image: "/images/shop-tshirts.png",
    href: SPREADSHOP_URL, // chaho to category link: `${SPREADSHOP_URL}/t-shirts`
  },
  {
    key: "hoodies",
    image: "/images/shop-hoodies.png",
    href: SPREADSHOP_URL,
  },
  {
    key: "accessories",
    image: "/images/shop-accessories.png",
    href: SPREADSHOP_URL,
  },
];

export default function ShopPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* ---------- Hero (Wear the Game.) ---------- */}
      <section className="shop-hero">
        <div className="shop-hero-container">
          <div className="shop-hero-content">
            <p className="shop-hero-eyebrow">{t("shop.hero.eyebrow")}</p>

            <h1 className="shop-hero-title">
              {t("shop.hero.title1")}
              <br />
              <span className="shop-hero-title-pink">
                {t("shop.hero.titlePink")}
              </span>
            </h1>

            <p className="shop-hero-text">{t("shop.hero.text")}</p>
          </div>

          <img
            src="/images/tshirt.png"
            alt=""
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
            <p className="collection-eyebrow">
              {t("shop.collection.eyebrow")}
            </p>
            <h2 className="collection-title">
              {t("shop.collection.title")}{" "}
              <span className="collection-title-pink">
                {t("shop.collection.titlePink")}
              </span>
            </h2>
            <p className="collection-text">{t("shop.collection.text")}</p>
          </div>

          <div className="collection-cards">
            {COLLECTIONS.map((item) => (
              <div key={item.key} className="collection-card">
                <div className="collection-card-image-wrap">
                  <img
                    src={item.image}
                    alt={t(`shop.collection.items.${item.key}`)}
                    className="collection-card-image"
                  />
                </div>

                <div className="collection-card-body">
                  <h3 className="collection-card-title">
                    {t(`shop.collection.items.${item.key}`)}
                  </h3>
                  <span className="collection-card-line" />

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="collection-card-btn"
                  >
                    {t("shop.collection.btn")}
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