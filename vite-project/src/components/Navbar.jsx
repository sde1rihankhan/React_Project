import React from "react";
import Searchsvg from "../assets/Search.svg";
import Search_svg from "../assets/search-.png";
import filter from "../assets/filter.svg";
import filterImg from "../assets/filter1.svg";
import toggleImg from "../assets/toggle-50.png";
import toggleImage from "../assets/toggle-.png";

const Navbar = ({ bgColor, color, toggleButton, toggle }) => {
  // const Searchsvg = () => (
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //       <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  //     </svg>
  //   );
  const bgcolor = color == "black"? "#cbc5c5":"black"
  return (
    <>
      <div className="nav_bar" style={{backgroundColor: `${bgcolor}`}}>
        <div
          className="logo"
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
          <p>WDM</p>
          <div onClick={toggleButton}>
            {toggle ? <img src={toggleImg} /> : <img src={toggleImage} />}
          </div>
        </div>
        <div
          className="search"
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
          <div className="searchDev">
            {toggle ? (
              <img className="searchImage" src={Searchsvg} />
            ) : (
              <img className="searchImage" src={Search_svg} />
            )}
            <div className="left">Search here...</div>
          </div>
          <div className="filterDiv">
            {toggle ? (
              <img className="filterImage" src={filter} />
            ) : (
              <img className="filterImage" src={filter} />
            )}
            <div className="right">Filters</div>
          </div>
        </div>
        <div
          className="seller"
          style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
        >
          Becoma a Seller
        </div>
      </div>
    </>
  );
};

export default Navbar;
