import React, { useState, useEffect } from "react";
import balanceCardBackground from "../img/balanceCard.png";
import editBtn from "../img/edit.png";
import "../style/balanceCard.css";
import BalanceInputModal from "./Modal/balanceInputModal";

const BalanceCard = ({ isBalanceNew, setBalanceNew }) => {
  const [balance, setBalance] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rerere");
    const card = JSON.parse(localStorage.getItem("Balance"));
    if (card) {
      setBalance(formatNumberWithCommas(card.balance));
      setIncome(formatNumberWithCommas(card.income));
      setExpense(formatNumberWithCommas(card.expense));
    }
  }, [count, isBalanceNew]);

  function formatNumberWithCommas(number) {
    // Convert the number to a string
    const numberString = number.toString();

    // Split the string into two parts: integer and decimal
    const [integerPart, decimalPart = ""] = numberString.split(".");

    // Split the integer part into an array of characters
    const integerCharacters = integerPart.split("");

    // Create a new array to store the formatted characters
    const formattedCharacters = [];

    // Iterate over the integer characters in reverse order
    for (let i = integerCharacters.length - 1; i >= 0; i--) {
      // Add the current character to the formatted array
      formattedCharacters.unshift(integerCharacters[i]);

      // Add a comma after every third character (except the first)
      if ((integerCharacters.length - i) % 3 === 0 && i !== 0) {
        formattedCharacters.unshift(",");
      }
    }

    // Join the formatted characters into a string
    let formattedNumber = formattedCharacters.join("");

    // Add the decimal part, if present
    if (decimalPart !== "") {
      formattedNumber += `.${decimalPart}`;
    }

    // Return the formatted number
    return formattedNumber;
  }

  return (
    <div id="cardContainer" className="position-relative animated zoomIn">
      <img className="img-fluid" src={balanceCardBackground} alt="" />
      <div className="bottom-left">
        <p id="incomeLabel">Income</p>
        <p id="bottomLeft">{`Rs ${income}`}</p>
      </div>
      <div className="center-bottom"></div>
      <div className="top-left">
        <p id="topLeft">Balance</p>
      </div>
      <div className="image-top-right">
        {/* <img src={editBtn} alt="Edit" /> */}
        <BalanceInputModal setCount={setCount} count={count} />
      </div>
      <div className="bottom-right">
        <p id="expenseLabel">Expenses</p>
        <p id="bottomRight">{`Rs ${expense}`}</p>
      </div>
      <div className="centered">
        <p id="centered" style={{ color: "white" }}>{`Rs${balance}`}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
