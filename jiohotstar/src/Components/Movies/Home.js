import React from "react";
import Movies from "./Movies"
import logo from "../Images/logo.png"
import jv from "../Images/38_jv.png"
import { Route,  BrowserRouter as Router, Routes , Link} from 'react-router-dom';
import Main from "./Main";
import Search from "./Search";
import Tv from "./Tv";
import Sports from "./Sports";
import LatestReleases from "./LatestReleases";
function Home(){
    return(
  <Router>
    <div className="Hotstar">
      <div className="sidebar">
        <div className="logo">
          <Link to="/subcreation">
            <img src={logo} alt="Hotstar Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <div className="logo">
              <Link to="/">
                <i className="fa-solid fa-house"></i>
              </Link>
            </div>
          </li>
          <li>
            <div className="logo">
              <Link to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </li>
          <li>
            <div className="logo">
              <Link to="/tv">
                <i className="fa-solid fa-tv"></i>
              </Link>
            </div>
          </li>
          <li>
            <div className="logo">
              <Link to="/movies">
                <i className="fa-solid fa-film"></i>
              </Link>
            </div>
          </li>
          <li>
            <div className="logo">
              <Link to="/sports">
                <i className="fa-solid fa-person-walking"></i>
              </Link>
            </div>
          </li>
          <li>
            <div className="logo">
              <Link to="/categories">
                <i className="fa-solid fa-icons"></i>
              </Link>
            </div>
          </li>
          <li>
            <div className="logo">
              <Link to="/sparks">
                <i className="fa-solid fa-video"></i>
              </Link>
            </div>
          </li>
          <li>
            <Link to="/myspace">
              <img src={jv} alt="" className="Image" />
            </Link>
          </li>
        </ul>
      </div>
      {/* Remaining JSX structure goes here */}
      
    </div>

      <Routes> 
               <Route path="/" element = {<Main/>}/>    
               <Route path="/movies" element = {<Movies/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/tv" element={<Tv/>}/>
                <Route path="/sports" element={<Sports />}/>
                <Route path="/latestReleases" element={<LatestReleases />}/>
                {/* <Route path="/movies" element = {<Movies />}/> */}
            </Routes>


   </Router>
        
         

    )
}
export default Home;