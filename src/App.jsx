import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import FeaturesPage from "./pages/FeaturesPage";
import CommunityPage from "./pages/CommunityPage";
import ShopPage from "./pages/ShopPage";
import NewsPage from "./pages/NewsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import SupportPage from "./pages/SupportPage";
import NewsDetailPage from "./pages/NewsDetailPage";

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/support" element={<SupportPage />} />  
           <Route path="/news" element={<NewsPage />} />
   <Route path="/news/:id" element={<NewsDetailPage />} /> 
      </Routes>

      <Footer />
    </div>
  );
}