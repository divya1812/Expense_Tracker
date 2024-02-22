import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useI18n } from '../i18n';

export const Balance = () => {
  const { t } = useI18n();
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>{t('Balancetitle')}</h4>
      <h1>${total}</h1>
    </>
  );
};


