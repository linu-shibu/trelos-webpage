import React from "react";
import "./Storemenu.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Storemenu() {
  return (
    <div className="menu">
      <div className="menuContent">
        <div className="menuheadings">
          <div className="mainhead">
            <h1 id="storeMainHeading">Find the Best Businesses in Town</h1>
            <div className="viewBtnDiv">
              <h3 id="viewAllBtn">View All</h3>
              <ArrowRightAltIcon id="arrowIcon" />
            </div>
          </div>
          <h3 id="shopText">Famous Shops</h3>
        </div>
        <div className="stores1">
          <div className="cloth">
            <img
              src="https://media.wired.com/photos/5bce6ca10fc6cf6fff0a00d1/125:94/w_1183,h_890,c_limit/Amazon-Go-FINAL.jpg"
              alt=""
              className="storeImg"
            />
            <h3 className="storeImgText">Clothing Store ADC</h3>
          </div>
          <div className="veg">
            <img
              src="https://media.wired.com/photos/5bce6ca10fc6cf6fff0a00d1/125:94/w_1183,h_890,c_limit/Amazon-Go-FINAL.jpg"
              alt=""
              className="storeImg"
            />
            <h3 className="storeImgText">Vegetable Store ADC</h3>
          </div>
          <div className="coffee">
            <img
              src="https://media.wired.com/photos/5bce6ca10fc6cf6fff0a00d1/125:94/w_1183,h_890,c_limit/Amazon-Go-FINAL.jpg"
              alt=""
              className="storeImg"
            />
            <h3 className="storeImgText">Coffee Store ADC</h3>
          </div>
        </div>
        <div className="stores2">
          <div className="fast">
            <img
              src="https://media.wired.com/photos/5bce6ca10fc6cf6fff0a00d1/125:94/w_1183,h_890,c_limit/Amazon-Go-FINAL.jpg"
              alt=""
              className="storeImg"
            />
            <h3 className="storeImgText">Fast Food Store ADC</h3>
          </div>
          <div className="cloth">
            <img
              src="https://media.wired.com/photos/5bce6ca10fc6cf6fff0a00d1/125:94/w_1183,h_890,c_limit/Amazon-Go-FINAL.jpg"
              alt=""
              className="storeImg"
            />
            <h3 className="storeImgText">Cloth Store ADC</h3>
          </div>
          <div className="food">
            <img
              src="https://media.wired.com/photos/5bce6ca10fc6cf6fff0a00d1/125:94/w_1183,h_890,c_limit/Amazon-Go-FINAL.jpg"
              alt=""
              className="storeImg"
            />
            <h3 className="storeImgText">Food Store ADC</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storemenu;
