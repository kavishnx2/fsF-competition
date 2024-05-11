import React, { useState, useEffect } from "react";
import "../../style/BuyStock.css";
import successSound from "../../music/treasure.mp3";
import rogers from "../../img/rogers.png";

const BuyStock = ({ visible, setVisible }) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  return (
    <div>
      <div
        id="popup-containerM"
        className="popup-containerM"
        style={{ display: visible ? "flex" : "none" }}
      >
        <div className="popup-content">
          <div className="close-button" onClick={() => setVisible(false)}>
            &#x2716;
          </div>

          <img alt="" src={rogers} />

          <h3 className="popup-title" style={{ color: "#484848" }}>
            Rs29.75
          </h3>
          <h3 className="popup-title1" style={{ color: "#484848" }}>
            Buy: Rs29.75
          </h3>
          <h3 className="popup-title1" style={{ color: "#484848" }}>
            Sell: Rs25.45
          </h3>
          <h3 className="popup-title1" style={{ color: "#484848" }}>
            Previous Price: Rs28.00
          </h3>
          <h3 className="popup-title" style={{ color: "#484848" }}>
            Quantity :{" "}
          </h3>
          <input
            className="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="quantity"
          />
          <br />

          <div className="button-container">
            <button className="buttonContinue">Buy</button>
            <button className="buttonContinue">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyStock;
