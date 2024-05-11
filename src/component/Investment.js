import React from "react";
import balanceCardBackground from "../img/investment_card.png";
import editBtn from "../img/edit.png";
import alteoIcon from "../img/Alteo.png";
import enlIcon from "../img/enl.png";
import cimIcon from "../img/cim.png";
import swanIcon from "../img/swan.png";
import moroilIcon from "../img/moroil.png";
import terraIcon from "../img/terra.png";
import mcbIcon from "../img/mcb.png";
import rogersIcon from "../img/rogers.png";
import lockIcon from "../img/Lock_icon.png";
import "../style/investmentpage.css";

const Investment = ({ setVisible }) => {
  return (
    <div className="scrollable-container-investment-page">
      <div
        id="cardContainer-investment-page"
        class="position-relative animated zoomIn"
      >
        <img
          class="img-fluid-investment-page"
          src={balanceCardBackground}
          alt=""
          style={{ width: "100%" }}
        />
        <div class="bottom-left-investment-page">
          <p id="incomeLabel">Spent</p>
          <p id="bottomLeft">Rs 18,000.00</p>
        </div>
        <div className="center-bottom-investment-page"></div>
        <div className="top-left-investment-page">
          <p id="topLeft-investment-page">Free Fund</p>
        </div>
        <div className="bottom-right-investment-page">
          <p id="expenseLabel">Portfolio</p>
          <p id="bottomRight">Rs 8,750.00</p>
        </div>
        <div className="centered-investment-page" >
          <p id="centered" style={{ color: "white", fontSize : "40px" }}>
            Rs 24,000
          </p>
        </div>
      </div>

      <div style={{ paddingTop: "15px" }}>
        <p style={{ color: "#2F2F2F", fontSize: "20px", fontWeight: "600" }}>
          Open Market
        </p>
      </div>

      <div className="container-stock-investment-page">
        <div className="stock-container-investment-page">
          <div className="stock-row-investment-page">
            <img
              className="stock-image-investment-page"
              src={alteoIcon}
              alt=""
            />
            <div className="stock-price-investment-page">Rs 8.20</div>
          </div>
        </div>
      </div>

      <div className="container-stock-investment-page">
        <div className="stock-container-investment-page">
          <div className="stock-row-investment-page">
            <img
              className="stock-image-investment-page"
              src={moroilIcon}
              alt=""
            />
            <div className="stock-price-investment-page">Rs 17.75</div>
          </div>
        </div>
      </div>

      <div className="container-stock-investment-page">
        <div className="stock-container-investment-page">
          <div className="stock-row-investment-page">
            <img
              className="stock-image-investment-page"
              src={terraIcon}
              alt=""
            />
            <div className="stock-price-investment-page">Rs 22.00</div>
          </div>
        </div>
      </div>

      <div className="container-stock-investment-page">
        <div className="stock-container-investment-page">
          <div
            className="stock-row-investment-page"
            // onClick={() => {
              // setVisible(true);
            // }}
          >
            <img
              className="stock-image-investment-page"
              src={rogersIcon}
              alt=""
            />
            <div className="stock-price-investment-page">Rs 29.75</div>
          </div>
        </div>
      </div>

      <div className="container-stock-investment-page">
        <div className="stock-lock-container-investment-page locked">
          <div className="overlay-investment-page"></div>
          <div className="lock-content-investment-page">
            <img className="lock-image-investment-page" src={lockIcon} alt="" />
          </div>
          <div className="stock-container-investment-page">
            <div className="stock-row-investment-page">
              <img
                className="stock-image-investment-page"
                src={enlIcon}
                alt=""
              />
              <div className="stock-price-investment-page">Rs 19.50</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-stock-investment-page">
        <div className="stock-lock-container-investment-page locked">
          <div className="overlay-investment-page"></div>
          <div className="lock-content-investment-page">
            <img className="lock-image-investment-page" src={lockIcon} alt="" />
          </div>
          <div className="stock-container-investment-page">
            <div className="stock-row-investment-page">
              <img
                className="stock-image-investment-page"
                src={mcbIcon}
                alt=""
              />
              <div className="stock-price-investment-page">Rs 315.45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;