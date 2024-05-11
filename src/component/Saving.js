import React, { useState, useEffect } from "react";
import "../style/savingComponent.css";
import outing from "../img/outing.png";
import blank from "../img/blankecllipse.png";

const Saving = ({ setVisible, isSavingNew, setIsSavingNew }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Saving"));
    if (items) {
      setItems(items);
    }
    console.log(items);
  }, [isSavingNew]);

  return (
    <div className="scrollable-container">
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {items?.map((saving, index) => (
            <div
              className="savinggoal-container"
              style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
            >
              <img src={outing} className="savinggoal-image" alt="" />
              <div className="savinggoal-title">{saving.Title}</div>

              <div className="savinggoal-date">{saving.date}</div>

              <div className="savinggoal-price"> Rs {saving.amount}</div>

              <img src={blank} className="savinggoal-image" alt="" />
            </div>
          ))}
        </div>

        <div style={{ paddingTop: "50px" }}>
          <p style={{ fontSize: "20px", fontWeight: "400", color: "black" }}>
            Tip
          </p>

          <div className="rowd">
            <div className="tipstext">
              <span>
                Have a clear picture of the regular expenses <br></br> and
                spending habits.<br></br>
                This helps you see where you can <br></br>
                cut back and save.
              </span>
            </div>
            <div className="addbutton" onClick={() => setVisible(true)}>
              <button className="circle-button">
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saving;
