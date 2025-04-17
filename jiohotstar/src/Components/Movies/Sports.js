import React from 'react'
import ghecard from "./GHE.json";
import movcard from "./Search.json";

const Sports = () => {
  return (
      <div className="sports">
     <div className='movie-section2' >    
       <div className="overlay2">
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/8562/1744722148562-t" alt="Logo" className="logoA" />
         <p className="desc">Delhi Capitals face Rajasthan Royals in the League Stage of TATA IPL 2025 and here's what you need to know.
      </p>
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
            {card.link ? (
              <a href={card.link}>
                <img src={card.image} alt={`Card ${card.id}`} />
              </a>
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
            {card.link ? (
              <a href={card.link}>
                <img src={card.image} alt={`Card ${card.id}`} />
              </a>
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
export default Sports;