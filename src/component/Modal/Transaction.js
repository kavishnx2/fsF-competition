import React, { useState } from "react";
import "../../style/Transaction.css";
import successSound from "../../music/treasure.mp3";

const Transaction = ({
  visible,
  setVisible,
  isTransactionNew,
  setIsTransaction,
  setBalanceNew,
}) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const audio = new Audio(successSound);
  audio.loop = false;

  function saveDataToLocalStorage(sign) {
    const existingData = JSON.parse(localStorage.getItem("Transaction"));
    const balance = JSON.parse(localStorage.getItem("Balance"));

    const newBalance = {
      balance: balance.balance,
      income: balance.income,
      expense: balance.expense,
    };

    const data = {
      name: name,
      amount: amount,
      sign: sign,
    };

    if (Array.isArray(existingData)) {
      existingData.push(data);
      localStorage.setItem("Transaction", JSON.stringify(existingData));
    } else {
      localStorage.setItem("Transaction", JSON.stringify([data]));
    }

    if (sign) {
      newBalance.balance = parseInt(balance.balance) + parseInt(amount);
    } else {
      newBalance.balance = parseInt(balance.balance) - parseInt(amount);
    }

    setIsTransaction(isTransactionNew + 1);
    setBalanceNew(isTransactionNew + 1);

    localStorage.setItem("Balance", JSON.stringify(newBalance));

    setVisible(false);
  }

  return (
    <div>
      <div
        id="popup-container-transaction-details"
        className="popup-container-transaction-details"
        style={{ display: visible ? "flex" : "none" }}
      >
        <div className="popup-content-transaction-details">
          <div
            className="close-button-transaction-details"
            onClick={() => setVisible(false)}
          >
            &#x2716;
          </div>

          <h3
            className="popup-title-transaction-details"
            style={{ color: "#484848" }}
          >
            Add Transactions
          </h3>
          <h3
            className="popup-title2-transaction-details"
            style={{ color: "#484848" }}
          >
            Name:
          </h3>
          <input
            className="expense-textfield-transaction-details"
            type="text"
            id="Quantity"
            placeholder="Name of Transactions"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3
            className="popup-title2-transaction-details"
            style={{ color: "#484848" }}
          >
            Amount:
          </h3>
          <input
            className="expense-textfield-transaction-details"
            type="text"
            id="Quantity"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <h3
            className="popup-title1-transaction-details"
            style={{ color: "#797979" }}
          >
            A transaction can be an addition to the balance or an expense.
            Please click the correct button below
          </h3>

          <div className="button-containerr-transaction-details">
            <button
              className="buttonContinue-transaction-details"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                saveDataToLocalStorage(true);
                audio.loop = false;
                audio.play();
              }}
            >
              <h1
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                +
              </h1>
            </button>
            <button
              className="buttonContinue2-transaction-details"
              style={{ backgroundColor: "red", width: "200px" }}
              onClick={() => {
                saveDataToLocalStorage(false);
                audio.loop = false;
                audio.play();
              }}
            >
              <h1
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                -
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
