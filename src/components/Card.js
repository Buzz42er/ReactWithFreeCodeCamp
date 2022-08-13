import React from "react";
import katie from "../Airbnb-Experiences/Katie-Zaferes.png";
import star from "../Airbnb-Experiences/Star.png";

const Card = (props) => {
  return (
    <div className="cards">
      <img className="expImg" src={katie} alt="" />
      <div className="score">
        <img className="starImg" src={star} alt="" />
        <span>5.0</span>
        <span className="grayText">(6) •</span>
        <span className="grayText">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
};

export default Card;

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
