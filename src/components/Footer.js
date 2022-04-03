import React from "react";
import "./Footer.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="topFooter">
        <div className="links">
          <h2>Quick links</h2>
          <h3 className="sublinks">About us</h3>
          <h3 className="sublinks">FAQ</h3>
          <h3 className="sublinks">Help</h3>
          <h3 className="sublinks">My Account</h3>
          <h3 className="sublinks">Create Account</h3>
          <h3 className="sublinks">Contacts</h3>
        </div>
        <div className="categories">
          <h2>Categories</h2>
          <h3 className="categoryList">Shops</h3>
          <h3 className="categoryList">Hotels</h3>
          <h3 className="categoryList">Restaurants</h3>
          <h3 className="categoryList">Stationary</h3>
          <h3 className="categoryList">Events</h3>
          <h3 className="categoryList">View all</h3>
        </div>
        <div className="contacts">
          <h2>Contacts</h2>
          <div className="address">
            <HomeOutlinedIcon className="contactIcons" />
            <h3 className="contactText">Dummy address, 567 New Delhi, India</h3>
          </div>
          <div className="phone">
            <PhoneOutlinedIcon className="contactIcons" />
            <h3 className="contactText">+62 23 11234 2223</h3>
          </div>
          <div className="email">
            <EmailOutlinedIcon className="contactIcons" />
            <h3 className="contactText">info@domain.com</h3>
          </div>
        </div>
        <div className="social">
          <div className="inTouch">
            <h2>Keep intouch</h2>
            <div className="inTouchSearch">
              <input
                type="text"
                placeholder="Your email"
                id="inTouchSearchBar"
              />
              <button id="inTouchBtn">Submit</button>
            </div>
          </div>
          <div className="handles">
            <h2>Follow Us</h2>
            <div className="handlesIcons">
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <h3 id="bottomLeftText">Unravel for Businesses</h3>
        <div className="bottomContent">
          <h3 className="bottomText">Terms & Conditions</h3>
          <h3 className="bottomText">Privacy</h3>
          <h3 className="bottomText">2022</h3>
          <h3 id="bottomName" className="bottomText">
            Unravel
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
