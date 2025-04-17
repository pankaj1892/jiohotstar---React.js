import React from "react";
// import movcard from "./Search.json";
import ghecard from "./GHE.json";
import movcard from "./Movies.json";
import { Link } from "react-router-dom";

const movlistesList = () => {

  return (
    <div className="MovlistesList">
      <div className="movie-section">
        
      <div className="overlay">
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/4910/1374910-t-c524f5224090" alt="Logo" className="logoA" />
        <h1 className="title">Avengers Endgame</h1>
        <p className="details">
        2019 • U/A 13+ • 3h 1m •{" "}
        4 Languages
        </p>
        <p className="desc"> After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance.
        </p>
        <p className="tags">Super Heroes |Action | Dark Humour | Alien</p>

        <div className="audio">
        Hindi, Tamil, Telugu, English
          
        </div>

        <div className="buttons">
          <button className="subscribe">▶ Watch Now</button>
          <button className="plus">＋</button>
        </div>
        </div>
</div>

        {/* Title & Cards - Latest Releases */}
        <div className="title-card">
          <div className="title-left">
            <h2>Latest Releases</h2>
          </div>
          <div className="title-right">
            <h3 className="la-re">View All</h3>
          </div>
        </div>

        <div className="card-flex">
          {movcard.map((card) => (
            <div className="card" key={card.id}>
              {card.image ? (
              <Link to="/latestReleases">
                 <img src={card.image} alt={`Card ${card.id}`} />
              </Link>
              ) : (
                <img src={card.image} alt={`Card ${card.id}`} />
              )}
            </div>
          ))}
        </div>

        {/* Title & Cards - Global English Hits */}
        <div className="title-card">
          <div className="title-left">
            <h2>Global English Hits</h2>
          </div>
          <div className="title-right">
            <h3 className="gl-Eng-Hits">View All</h3>
          </div>
        </div>

        <div className="card-flex">
          {ghecard.map((card) => (
            <div className="card" key={card.id}>
              {card.image ? (
                  <Link to="/latestReleases">
                   <img src={card.image} alt={`Card ${card.id}`} />
                </Link>
              ) : (
                <img src={card.image} alt={`Card ${card.id}`} />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="footer-info">
          <div className="footer-div1">
            <h4>Company</h4>
            <h6>About Us</h6>
            <h6>Careers</h6>
          </div>
          <div className="footer-div2">
            <h4>View Website in</h4>
            <h6>✓ English</h6>
          </div>
          <div className="footer-div3">
            <h4>Need Help?</h4>
            <h6>Visit Help Center</h6>
            <h6>Share Feedback</h6>
          </div>
          <div className="footer-div4">
            <h4>Connect with Us</h4>
            <div className="footer-logo1">
              <a href="https://www.facebook.com/JioHotstar#" target="blank">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div className="footer-logo2">
              <a href="https://x.com/DisneyPlusHS" target="blank">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </footer>

        <footer className="footer-info1">
          <div>
            <div className="Policy">
              <h6>© 2025 STAR. All Rights Reserved.</h6>
              <h6>Terms Of Use | Privacy Policy | FAQ</h6>
            </div>
            <div className="footer-logo3">
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="App Store" />
          </div>
          <div className="footer-logo4">
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="Google Play" />
          </div>
        </div>
        </footer>
    </div>
  );
};

export default movlistesList;
