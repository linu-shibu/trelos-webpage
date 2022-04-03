import React from "react";
import "./Reviews.css";
import StarIcon from "@mui/icons-material/Star";

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviewHeadings">
        <h1 id="reviewMainHead">Latest Reviews</h1>
        <h3 id="reviewTag">Reviews that matters!</h3>
      </div>
      <div className="reviewBoxes">
        <div className="reviewBox">
          <div className="boxHead">
            <img
              src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
              alt=""
              className="reviewImg"
            />
            <div className="boxHeadMid">
              <div className="reviewStars">
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <h4 className="reviewHeadText">4.5/5.0</h4>
              </div>
              <h4 className="reviewHeadText">Shops</h4>
            </div>
          </div>
          <div className="boxMidText">
            <h4 id="reviewTextName">
              John Doe <span id="reviewTextVerb">reviewed</span>
            </h4>
            <h2 id="reviewTextAdj">"Great Experience"</h2>
            <p className="reviewTextDesc">
              I really liked the place a lot as it
            </p>
            <p className="reviewTextDesc">covered all the things I wanted</p>
          </div>
          <div className="boxFooter">
            <p id="publishText">Published : 26 February 2022</p>
            <button id="reviwBtn">Read Reviews</button>
          </div>
        </div>
        <div className="reviewBox">
          <div className="boxHead">
            <img
              src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
              alt=""
              className="reviewImg"
            />
            <div className="boxHeadMid">
              <div className="reviewStars">
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <h4 className="reviewHeadText">4.5/5.0</h4>
              </div>
              <h4 className="reviewHeadText">Shops</h4>
            </div>
          </div>
          <div className="boxMidText">
            <h4 id="reviewTextName">
              John Doe <span id="reviewTextVerb">reviewed</span>
            </h4>
            <h2 id="reviewTextAdj">"Great Experience"</h2>
            <p className="reviewTextDesc">
              I really liked the place a lot as it
            </p>
            <p className="reviewTextDesc">covered all the things I wanted</p>
          </div>
          <div className="boxFooter">
            <p id="publishText">Published : 26 February 2022</p>
            <button id="reviwBtn">Read Reviews</button>
          </div>
        </div>
        <div className="reviewBox">
          <div className="boxHead">
            <img
              src="http://process3d.ie/wp-content/uploads/2015/08/shopfront-1-1200x641.jpg"
              alt=""
              className="reviewImg"
            />
            <div className="boxHeadMid">
              <div className="reviewStars">
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <StarIcon className="reviewStar" />
                <h4 className="reviewHeadText">4.5/5.0</h4>
              </div>
              <h4 className="reviewHeadText">Shops</h4>
            </div>
          </div>
          <div className="boxMidText">
            <h4 id="reviewTextName">
              John Doe <span id="reviewTextVerb">reviewed</span>
            </h4>
            <h2 id="reviewTextAdj">"Great Experience"</h2>
            <p className="reviewTextDesc">
              I really liked the place a lot as it
            </p>
            <p className="reviewTextDesc">covered all the things I wanted</p>
          </div>
          <div className="boxFooter">
            <p id="publishText">Published : 26 February 2022</p>
            <button id="reviwBtn">Read Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
