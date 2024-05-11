import React  from "react";
import target from "../img/target.png";
import coin from "../img/dollar_coin.png";
import Confetti from "react-confetti";

const SuccessModal = ({ openSuccessSave, setOpenSuccessSave }) => {
  const { width, height } = 2030;

  return (
    <div>
      <div
        id="popup-container"
        className="popup-container"
        style={{ display: openSuccessSave ? "flex" : "none" }}
      >
        <Confetti width={width} height={height} />

        <div className="popup-content">
          <div
            className="close-button"
            onClick={() => setOpenSuccessSave(false)}
          >
            &#x2716;
          </div>
          <h2 className="popup-title" style={{ color: "#484848" }}>
            New Goal added
          </h2>

          <img className="popup-image" src={target} alt="Target" />
          <p className="popup-subtitle" style={{ color: "#9D9D9D" }}>
            You need to save money!
          </p>

          <div className="popup-price">
            <img className="dollar-image" src={coin} alt="Coin" />
            <p style={{ margin: 0 }}>5 Tokens</p>
          </div>

          <button
            className="buttonContinue"
            onClick={() => {
              setOpenSuccessSave(false);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
