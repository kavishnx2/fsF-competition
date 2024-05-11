import React, { useState, useRef, useEffect } from "react";
import "../../style/InputModal.css";
import successSound from "../../music/treasure.mp3";
import editBtn from "../../img/edit.png";

const BalanceInputModal = ({ setCount, count }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [balance, setBalance] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  const [items, setItems] = useState([]);

  console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  function saveDataToLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Balance"));

    const data = {
      balance: balance,
      income: income !== "" ? income : existingData.income,
      expense: expense !== "" ? expense : existingData.expense,
    };
    // existingData.push(data);

    localStorage.setItem("Balance", JSON.stringify(data));
    setOpenSuccess(false);
    setCount(count + 1);
  }

  function retrieveAllDataFromLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Balance"));

    console.log(Array.isArray(existingData));
  }

  return (
    <div>
      {/* <button >Show Pop-up</button> */}
      <img src={editBtn} alt="Edit" onClick={() => setOpenSuccess(true)} />

      <div
        id="popup-container-balance-input-modal"
        className="popup-container-balance-input-modal"
        style={{ display: openSuccess ? "flex" : "none" }}
      >
        <div className="popup-content-balance-input-modal">
          <div
            className="close-button-balance-input-modal"
            onClick={() => setOpenSuccess(false)}
          >
            &#x2716;
          </div>
          <h2
            className="popup-title-balance-input-modal"
            style={{ color: "#484848" }}
          >
            Edit Balance
          </h2>

          <label className="popup-subtitle-balance-input-modal">Balance</label>
          <br />
          <input
            className="expense-textfield-balance-input-modal"
            type=""
            id="text1"
            value={balance}
            placeholder="Balance amount"
            onChange={(e) => setBalance(e.target.value)}
          />
          <br />

          <label className="popup-subtitle-balance-input-modal">Income</label>
          <br />
          <input
            className="expense-textfield-balance-input-modal"
            type="text"
            id="text2"
            value={income}
            placeholder="Monthly income"
            onChange={(e) => setIncome(e.target.value)}
          />
          <br />

          <label className="popup-subtitle-balance-input-modal">Expense</label>
          <br />
          <input
            className="expense-textfield-balance-input-modal"
            type="text"
            id="text3"
            value={expense}
            placeholder="Monthly expense"
            onChange={(e) => setExpense(e.target.value)}
          />
          <br />

          <button
            className="buttonContinue-balance-input-modal"
            onClick={() => {
              saveDataToLocalStorage();
              retrieveAllDataFromLocalStorage();
              audio.loop = false;
              audio.play();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceInputModal;
