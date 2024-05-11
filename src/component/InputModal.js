import React, { useState, useRef, useEffect } from "react";
import "../style/InputModal.css";
import successSound from "../music/treasure.mp3";

const InputModal = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

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

  function retrieveAllDataFromLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Expenses"));

    console.log(Array.isArray(existingData));
  }

  return (
    <div>
      <button onClick={() => setOpenSuccess(true)}>Show Pop-up</button>

      <div
        id="popup-container"
        className="popup-container"
        style={{ display: openSuccess ? "flex" : "none" }}
      >
        <div className="popup-content">
          <div className="close-button" onClick={() => setOpenSuccess(false)}>
            &#x2716;
          </div>
          <h2 className="popup-title" style={{ color: "#484848" }}>
            Add Expenses
          </h2>

          <label className="popup-subtitle">Title</label>
          <br />
          <input
            className="expense-textfield"
            type=""
            id="text1"
            value={title}
            placeholder="Enter bill title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label className="popup-subtitle">Description</label>
          <br />
          <input
            className="expense-textfield"
            type="text"
            id="text2"
            value={description}
            placeholder="Enter bill description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label className="popup-subtitle">Amount</label>
          <br />
          <input
            className="expense-textfield"
            type="text"
            id="text3"
            value={amount}
            placeholder="Enter bill amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />

          <button
            className="buttonContinue"
            onClick={() => {
              saveDataToLocalStorage();
              retrieveAllDataFromLocalStorage();
              audio.loop = false;
              audio.play();
            }}
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
