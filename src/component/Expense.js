import React, { useState, useEffect } from "react";
import "../style/expenseCard.css";
import cwa from "../img/cwa.png";
import ceb from "../img/CEB.png";

const Expense = ({ setVisible, isExpenseNew, setIsExpenseNew }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Expenses"));
    if (items) {
      setItems(items);
    }
  }, [isExpenseNew]);

  return (
    <div className="scrollable-container-expense-card">
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {items?.map((expenses, index) => (
            <div
              key={index}
              className="expense-container-expense-card"
              style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
            >
              <div className="expense-row-expense-card">
                <div className="expense-title-expense-card">
                  {expenses.Title}
                </div>
                {expenses.Title.toLowerCase().includes("water") ? (
                  <img
                    className="expense-image-expense-card"
                    src={cwa}
                    alt="CWA"
                  />
                ) : (
                  <img
                    style={{ width: "100px", height: "40px" }}
                    className="expense-image-expense-card"
                    src={ceb}
                    alt="CEB"
                  />
                )}
              </div>

              <div className="expense-row-expense-card">
                <div className="expense-description-expense-card">
                  {expenses.description}
                </div>
              </div>
              <div className="expense-row-expense-card">
                <div className="expense-due-date-expense-card">
                  Due Date: 2 July 2023
                </div>
              </div>
              <div className="expense-row-expense-card">
                <div
                  className="expense-alarm-expense-card"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Amount: Rs {expenses.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="addbutton-expense-card">
        <button className="circle-button" onClick={() => setVisible(true)}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Expense;
