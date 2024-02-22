import React, { Suspense } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { ChangeLanguage } from './components/ChangeLanguage';
import Toast from './components/toast';



function App() {
  return (
    <GlobalProvider> 
      <ChangeLanguage />
      <Header />
     <div className="container">
       <Balance />
       <IncomeExpenses />
       <TransactionList />
       <AddTransaction />
     </div>
     <Toast />
    </GlobalProvider>
  );
}

export default App;
