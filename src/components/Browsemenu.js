import React from "react";
import "./Browsemenu.css";

function Browsemenu() {
  return (
    <div className="browsemenu">
      <h1 id="browseMainHead">Browse Business by Category</h1>
      <div className="browseSections">
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Restaurants</h2>
        </div>
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Shopping</h2>
        </div>
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Nightlife</h2>
        </div>
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Active life</h2>
        </div>
      </div>
      <div className="browseSections">
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Beauty & Spa’s</h2>
        </div>
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Automotive</h2>
        </div>
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">Home Service</h2>
        </div>
        <div className="browse">
          <img
            src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
            alt=""
            className="browseImg"
          />
          <h2 className="browseText">More Categories</h2>
        </div>
      </div>
    </div>
  );
}

export default Browsemenu;
