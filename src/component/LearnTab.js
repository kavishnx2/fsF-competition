import React, { useState } from "react";
import "../style/LearnTab.css";
import video from "../img/Group 88.png";
import Investment from "./Investment";
import Course from "./Course";
import BuyStock from "./Modal/BuyStock";

const LearnTab = () => {
  const [openBuyModal, setOpenBuyModal] = useState(false);

  return (
    <div>
      <BuyStock visible={openBuyModal} setVisible={setOpenBuyModal} />
      <div className="wrapper">
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "20px",
            marginBottom: "-20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <div style={{ fontSize: "22px", color: "black" }}>Your</div>
            <div
              style={{ fontSize: "22px", color: "black", fontWeight: "600" }}
            >
              Skills
            </div>
          </div>

          <div style={{ paddingTop: "10px" }}>
            <div className="loading-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>


        <div className="tabss">
          <div className="tab">
            <input
              type="radio"
              name="css-tabss"
              id="tab-1"
              checked
              className="tab-switch"
            />
            <label for="tab-1" className="tab-label">
              Course
            </label>
            <div className="tab-content">
              <Course />
            </div>
          </div>
          <div className="tab">
            <input
              type="radio"
              name="css-tabss"
              id="tab-2"
              className="tab-switch"
            />
            <label for="tab-2" className="tab-label">
              Investment Simulation
            </label>
            <div className="tab-content">
              <Investment setVisible={setOpenBuyModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnTab;
