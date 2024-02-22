import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";
import { useI18n } from '../i18n';

export const TransactionList = () => {
  const { t } = useI18n();
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>{t('History')}</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
