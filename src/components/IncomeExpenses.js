import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useI18n } from "../i18n";

export const IncomeExpenses = () => {
  const { t } = useI18n();
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>{t("Income in $")}</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>{t("Expense in $")}</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};
