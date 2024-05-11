import React, { useState, useEffect } from "react";
import "../style/bankCard.css";
import visa from "../img/visa_card.png";
import edit from "../img/edit_card.png";
const BankCard = ({ setVisible, isTransactionNew, setIsTransaction }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Transaction"));
    if (items) {
      setItems(items);
    }
    console.log(items);
  }, [isTransactionNew]);

  return (
    <div className="overall">
      <div className="first-row">
        <div className="first-column">
          <div className="title-details">
            <p id="cardDetails">Card Details</p>
            <p id="expiryDate">Expiry Date: 24 April 2022</p>
            <p id="limit">Card Limit: Rs 10,000</p>
          </div>

          <div className="edit-card">
            <img className="img-fluid" src={edit} alt="" />
          </div>
        </div>

        <div className="second-column">
          <div id="cardContainer" className="position-relative">
            <img className="img-fluid" src={visa} alt="" />
            <div className="bottom-left-visa">
              <p id="cardNumber">CARD NUMBER</p>
              <p id="lockedCardNumber">1412 4143 5328 2393 1247</p>
              <p id="validity">VALID THRU</p>
              <p id="date">04/24</p>
            </div>

            <div className="top-right-visa">
              <p id="topRightVisa">Rs 1234</p>
            </div>
          </div>
        </div>
        <div className="third-column"></div>
      </div>
      <div className="second-row">
        <p id="transaction">Transaction</p>
        <div className="transactions">
          {items?.map((trn, index) => (
            <div className="transactions-container" style={{width:'200%'}}>
              <div className="transactions-details">
                <p id="transaction-title" style={{ color: "#939393" }}>
                  {trn.name}
                </p>
                <p
                  id="transaction-amount"
                  style={{ color: trn.sign ? "green" : "red" }}
                >
                  {trn.sign ? `+ Rs ${trn.amount}` : `- Rs ${trn.amount}`}
                </p>
              </div>
            </div>
          ))}

          <div className="button-container">
            <div></div>
            <div className="add-button" onClick={() => setVisible(true)}>
              <span className="plus-sign">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
