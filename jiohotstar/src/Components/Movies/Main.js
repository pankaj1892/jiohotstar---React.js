import React from "react";
import cardsData from "./Movies.json";
import ghecard from "./GHE.json"
import searchcard from "./Search.json"

function Main() {
  return (
    <div className="main">
      <div className="hero-section">
        <div className="content">
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/6077/1741539186077-t" alt="Logo" className="logoA" />
        
          <h1>2013 CT Win was Special: Kohli</h1>
          <p><strong>ICC Champions Trophy 2025 • 2m • Cricket</strong></p>
          <p>
            Virat Kohli talks about his ODI career and looks back on the 2025
            ICC Champions Trophy win.
          </p>
          <button className="watch-btn">▶ Watch Now</button>
        </div>
      </div>

      <div className="title-card">
        <div className="title-left">
          <h2>Latest Releases</h2>
        </div>
        <div className="title-right">
          <h3 className="la-re">View All</h3>
        </div>
      </div>

      <div className="card-flex">
        {cardsData.map((card) => {
          if (card.link) {
            return (
              <div className="card" key={card.id}>
                <a href={card.link}>
                  <img src={card.image} alt={`Card ${card.id}`} />
                </a>
              </div>
            );
          } else {
            return (
              <div className="card" key={card.id}>
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
            );
          }
        })}
      </div>

      <div className="title-card">
        <div className="title-left">
          <h2>Popular Shows
          </h2>
        </div>
        <div className="title-right">
          <h3 className="la-re">View All</h3>
        </div>
      </div>

      <div className="card-flex">
        {searchcard.map((card) => {
          if (card.link) {
            return (
              <div className="card" key={card.id}>
                <a href={card.link}>
                  <img src={card.image} alt={`Card ${card.id}`} />
                </a>
              </div>
            );
          } else {
            return (
              <div className="card" key={card.id}>
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
            );
          }
        })}
      </div>

      
      <div className="title-card">
        <div className="title-left">
          <h2>Global English Hits
          </h2>
        </div>
        <div className="title-right">
          <h3 className="gl-Eng-Hits">View All</h3>
        </div>
      </div>

      <div className="card-flex">
        {ghecard.map((card) => {
          if (card.link) {
            return (
              <div className="card" key={card.id}>
                <a href={card.link}>
                  <img src={card.image} alt={`Card ${card.id}`} />
                </a>
              </div>
            );
          } else {
            return (
              <div className="card" key={card.id}>
                <img src={card.image} alt={`Card ${card.id}`} />
              </div>
            );
          }
        })}
      </div>

      <footer class="footer-info">
          <div class="footer-div1">
            <h4>Company</h4>
            <h6>About Us</h6>
            <h6>Careers</h6>
          </div>
          <div class="footer-div2">
            <h4>View Website in</h4>
            <h6>✓ English</h6>
          </div>
          <div class="footer-div3">
            <h4>Need Help?</h4>
            <h6>Visit Help Center</h6>
            <h6>Shaer Feedback</h6>
          </div>
          <div class="footer-div4">
            <h4>Connect with Us</h4>
            <div class="footer-logo1">
              <a href="https://www.facebook.com/JioHotstar#" target="">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
            </div>
            <div class="footer-logo2">
              <a href="https://x.com/DisneyPlusHS" target="">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </footer>
        <footer class="footer-info1">
          <div>
            <div class="Policy">
              <h6>© 2025 STAR. All Rights Reserved.</h6>

              <h6>Terms Of Use Privacy Policy FAQ</h6>
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
}

export default Main;
