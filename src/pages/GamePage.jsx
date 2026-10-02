// import React from "react";
// import { Link } from "react-router-dom";
// import "../GamePage.css";

// export default function GamePage() {
//   return (
//     <>
//       {/* ---------- Hero ---------- */}
//       <section className="game-hero">
//         <img
//           src="/images/game-hero-bg.png"
//           alt="Football match on the pitch"
//           className="game-hero-bg"
//         />

//         <div className="game-hero-overlay" />

//         <div className="game-hero-container">
//           <div className="game-hero-content">
//             <p className="game-hero-eyebrow">FOOTBALL LEAGUE 2026 / GAME</p>

//             <h1 className="game-hero-title">
//               PLAY FOOTBALL.
//               <br />
//               <span className="game-hero-title-pink">YOUR WAY.</span>
//             </h1>

//             <p className="game-hero-text">
//               Realistic matches. Deep modes. Your global Football League
//               experience.
//             </p>

//             <div className="game-hero-actions">
//               <a
//                 href="https://discord.com/invite/m825ft9xGn"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="game-hero-btn"
//               >
//                 Play Now
//               </a>

//               <Link to="/features" className="game-hero-link">
//                 Explore all features
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


export default function GamePage() {
  return (
    <section className="page">
      <div className="page-inner">
        <p className="eyebrow eyebrow-pink">LEGAL</p>
        <h1 className="section-title">
          PRIVACY <span className="text-pink">POLICY</span>
        </h1>
        <p className="section-text">Privacy policy content is here</p>
      </div>
    </section>
  );
}