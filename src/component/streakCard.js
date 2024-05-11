import React from "react";
import "../style/streakCard.css";
import coin from "../img/dollar_coin.png";
import tick from "../img/tick.png";
import streak_person from "../img/streak_person.png";
import streakBack from "../img/streakBack.png";
import Redeem from "./Modal/Redeem";

const StreakCard = ({ isCoinNew, setCoinNew }) => {
  return (
    <div id="cardContainer" className="position-relative animated zoomIn">
      <img className="img-fluid" src={streakBack} alt="" />
      <div className="top-left-coin">
        <div className="streak-text">
          <img src={coin} className="dollar-coin" alt="" />
          <div className="text">
            <p>3 day streak</p>
            <p>Way to go!</p>
          </div>
        </div>
        <Redeem isCoinNew={isCoinNew} setCoinNew={setCoinNew} />
        {/* <div className="button">Redeem</div> */}
        <div className="column-configuration">
          <div clas="streak-days">
            <p>T</p>
            <img src={tick} alt="Tick" />
          </div>
          <div clas="streak-days">
            <p>F</p>
            <img src={tick} alt="Tick" />
          </div>
          <div clas="streak-days">
            <p>ST</p>
            <img src={tick} alt="Tick" />
          </div>
        </div>
      </div>
      <div className="picture">
        <img src={streak_person} alt="Tick" />
      </div>
    </div>
  );
};

export default StreakCard;
