import React from "react";
import "./Header.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HotelIcon from "@mui/icons-material/Hotel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Header() {
  return (
    <div class="header">
      <div className="topHeader">
        <div className="mainTextDiv">
          <h1 id="mainText">UNRAVEL</h1>
        </div>
        <div className="sideSec">
          <h3 className="sideMenuText">Home</h3>
          <h3 className="sideMenuText">Reviews</h3>
          <h3 className="sideMenuText">Blogs</h3>
          <h3 className="sideMenuText">Unravel for Businesses</h3>
          <button className="btn btn1">Login</button>
          <button className="btn btn2">Sign Up</button>
        </div>
      </div>
      <div className="midHeader">
        <h1 id="midText1">Discover your Perfect Business Nearby!</h1>
        <h2 id="midText2">Check Ratings, Read Reviews & Buy</h2>
        <div className="search">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="searchbar1"
          />
          <input
            type="text"
            placeholder="Select Category"
            className="searchbar2"
          />
          <button className="searchbtn">Search</button>
        </div>
      </div>
      <div className="btnBar">
        <div className="barBtn shopBtn">
          <LocalMallIcon className="icon" />
          <h3 className="iconText">Shops</h3>
        </div>
        <div className="barBtn homestayBtn">
          <HotelIcon className="icon" />
          <h3 className="iconText">Home Stays</h3>
        </div>
        <div className="barBtn restBtn">
          <FastfoodIcon className="icon" />
          <h3 className="iconText">Restaurant</h3>
        </div>
        <div className="barBtn musicBtn">
          <MusicNoteIcon className="icon" />
          <h3 className="iconText">Music</h3>
        </div>
        <div className="barBtn moreBtn">
          <MoreHorizIcon className="icon" />
          <h3 className="iconText">More</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
