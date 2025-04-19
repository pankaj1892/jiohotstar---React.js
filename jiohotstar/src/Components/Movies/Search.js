import React from "react";
import searchcard from "./Search.json"
import cardsData from "./Movies.json";
import ghecard from "./GHE.json"
import { Link } from "react-router-dom";
function Search(){
    return(
        <div className="Search"> 

<div class="nav">
        <nav>
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Movies, shows and more" />
          </div>
        </nav>
      </div>
      <div class="title-card">
        <div class="title-left">
         
          <h2>Trending in India</h2>
    
        </div>
      </div>

      <div className="card-flex">
        {cardsData.map((card) => {
          if (card.link) {
            return (
              <div className="card" key={card.id}>
                <Link t0={card.link}>
                  <img src={card.image} alt={`Card ${card.id}`} />
                </Link>
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
            <div class="footer-logo3">
              <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="" />
            </div>
            <div class="footer-logo4">
              <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="" />
            </div>
          </div>
        </footer>



        </div>

    )
}
export default Search;