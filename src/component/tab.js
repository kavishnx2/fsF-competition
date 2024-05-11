import React, { useState } from "react";
import "../style/tab.css";
import Expense from "./Expense";
import BankCard from "./BankCard";
import Saving from "./Saving";
import ExpenseModal from "./Modal/ExpenseModal";
import SavingModal from "./Modal/SavingModal";
import Transaction from "./Modal/Transaction";
import SuccessModal from "../component/SuccessModal";

const Tab = ({ isBalanceNew, setBalanceNew }) => {
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [openSavingModal, setOpenSavingModal] = useState(false);
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [isSavingNew, setIsSavingNew] = useState(0);
  const [isExpenseNew, setIsExpenseNew] = useState(0);
  const [isTransactionNew, setIsTransaction] = useState(0);
  const [openSuccessSave, setOpenSuccessSave] = useState(false);

  return (
    <div>
      <div className="tabs">
        <ExpenseModal
          visible={openExpenseModal}
          setVisible={setOpenExpenseModal}
          isExpenseNew={isExpenseNew}
          setIsExpenseNew={setIsExpenseNew}
        />
        <SavingModal
          visible={openSavingModal}
          setVisible={setOpenSavingModal}
          isSavingNew={isSavingNew}
          setIsSavingNew={setIsSavingNew}
          openSuccessSave={openSuccessSave}
          setOpenSuccessSave={setOpenSuccessSave}
        />
        <Transaction
          visible={openTransactionModal}
          setVisible={setOpenTransactionModal}
          isTransactionNew={isTransactionNew}
          setIsTransaction={setIsTransaction}
          setBalanceNew={setBalanceNew}
        />
        <SuccessModal
          openSuccessSave={openSuccessSave}
          setOpenSuccessSave={setOpenSuccessSave}
        />
        <div className="tabby-tab">
          <input type="radio" id="tabss-2" name="tabby-tabs" checked />
          <label for="tabss-2">My Expenses</label>
          <div className="tabby-content">
            <Expense
              setVisible={setOpenExpenseModal}
              isExpenseNew={isExpenseNew}
              setIsExpenseNew={setIsExpenseNew}
            />
          </div>
        </div>

        <div className="tabby-tab">
          <input type="radio" id="tabss-3" name="tabby-tabs" />
          <label for="tabss-3">Saving</label>
          <div className="tabby-content">
            <Saving
              setVisible={setOpenSavingModal}
              isSavingNew={isSavingNew}
              setIsSavingNew={setIsSavingNew}
            />
          </div>
        </div>

        <div className="tabby-tab">
          <input type="radio" id="tabss-4" name="tabby-tabs" />
          <label for="tabss-4">My Card</label>
          <div className="tabby-content">
            <BankCard
              setVisible={setOpenTransactionModal}
              isTransactionNew={isTransactionNew}
              setIsTransaction={setIsTransaction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
