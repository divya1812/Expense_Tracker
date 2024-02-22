import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useI18n } from "../i18n";

export const AddTransaction = () => {
  const { t } = useI18n();
  const [text, setText] = useState("");

  const [amount, setAmount] = useState(0);

  const { addTransaction, handleErrorMsg, handleResetErrorMsg } = useContext(
    GlobalContext
  );

  const handleError = () => {
    if (text === "" && Number(amount) === 0) {
      handleErrorMsg("Please fill the details");
      return;
    } else if (text !== "" && Number(amount) === 0) {
      handleErrorMsg("Please fill the Amount");
      return;
    } else if (text === "" && Number(amount) !== 0) {
      handleErrorMsg("Please fill the Text");
      return;
    }
    return;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    handleResetErrorMsg();

    if (text !== "" && Number(amount) !== 0) {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }
    handleError();

    setText(null);

    setAmount(0);

    return;
  };

  return (
    <>
      <h3>{t("Add new transaction")}</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">{t("Text")}</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t("Enter text")}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            {t("Amount")} <br />
            {t("negative_expense_positive_income")}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">{t("Add transaction")}</button>
      </form>
    </>
  );
};
