import React, { useState, useRef, useEffect } from "react";
import "../../style/InputModal.css";
import successSound from "../../music/treasure.mp3";
import cashingSound from "../../music/Cashing.mp3";
import "../../style/redeem.css";
import editBtn from "../../img/edit.png";
import coin from "../../img/redeem_coins.png";
import Confetti from "react-confetti";

const Redeem = ({ isCoinNew, setCoinNew }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [items, setItems] = useState([]);
  const [showCode, setShowCode] = useState(false);
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  const cashingAudio = new Audio(cashingSound);
  cashingAudio.loop = false;

  function saveDataToLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Expenses"));

    console.log(Array.isArray(existingData));

    const data = {
      Title: title,
      description: description,
      amount: amount,
    };
    existingData.push(data);

    localStorage.setItem("Expenses", JSON.stringify(existingData));
    setOpenSuccess(false);
  }

  const reduceCoin = (amount) => {
    const items = JSON.parse(localStorage.getItem("BalanceCoin"));
    if (items) {
      const total = parseInt(items.amount) - amount;
      localStorage.setItem("BalanceCoin", JSON.stringify({ amount: total }));
    } else {
      localStorage.setItem("BalanceCoin", JSON.stringify({ amount: 0 }));
    }
    setCoinNew(isCoinNew + 1);
  };

  const { width, height } = 2030;
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          audio.loop = false;
          audio.play();
          setOpenSuccess(true);
        }}
      >
        Redeem
      </div>

      <div
        id="popup-container"
        className="popup-container"
        style={{ display: openSuccess ? "flex" : "none" }}
      >
        {showCode || showCode1 || showCode2 ? (
          <Confetti width={width} height={height} />
        ) : (
          ""
        )}

        <div className="popup-content">
          <div className="close-button" onClick={() => setOpenSuccess(false)}>
            &#x2716;
          </div>
          <h2 className="popup-title" style={{ color: "#484848" }}>
            Redeem Coins
          </h2>
          <div className="redeem-content">
            <div className="stock-container">
              <div className="content">
                <div className="stock-details">
                  <div className="coins-amount-container">
                    <img
                      src={coin}
                      className="dollar-coin"
                      alt=""
                      style={{ width: "35px", height: "35px" }}
                    />
                    <div className="coins-amount">
                      <p>{showCode ? "Code: 58RRRR" : "34 coins"}</p>
                    </div>
                  </div>

                  <div className="stock-name">
                    <p>Allsport shoes</p>
                  </div>
                </div>
                {showCode === false ? (
                  <div className="buy-button">
                    <p
                      onClick={() => {
                        reduceCoin(34);
                        setShowCode(true);
                        cashingAudio.loop = false;
                        cashingAudio.play();
                        setOpenSuccess(true);
                      }}
                    >
                      Use
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="stock-container">
              <div className="content">
                <div className="stock-details">
                  <div className="coins-amount-container">
                    <img
                      src={coin}
                      className="dollar-coin"
                      alt=""
                      style={{ width: "35px", height: "35px" }}
                    />
                    <div className="coins-amount">
                      <p>{showCode1 ? "Code:cd2" : "15 coins"}</p>
                    </div>
                  </div>

                  <div className="stock-name">
                    <p>Magasin 58 rrr</p>
                  </div>
                </div>

                <div className="buy-button">
                  <p
                    onClick={() => {
                      reduceCoin(15);
                      setShowCode1(true);
                      cashingAudio.loop = false;
                      cashingAudio.play();
                      setOpenSuccess(true);
                    }}
                  >
                    Use
                  </p>
                </div>
              </div>
            </div>
            <div className="stock-container">
              <div className="content">
                <div className="stock-details">
                  <div className="coins-amount-container">
                    <img
                      src={coin}
                      className="dollar-coin"
                      alt=""
                      style={{ width: "35px", height: "35px" }}
                    />
                    <div className="coins-amount">
                      <p>{showCode2 ? "Code:cd3" : "45 coins"}</p>
                    </div>
                  </div>

                  <div className="stock-name">
                    <p>CitySport shoes</p>
                  </div>
                </div>

                <div className="buy-button">
                  <p
                    onClick={() => {
                      reduceCoin(45);
                      setShowCode2(true);
                      cashingAudio.loop = false;
                      cashingAudio.play();
                      setOpenSuccess(true);
                    }}
                  >
                    Use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;
