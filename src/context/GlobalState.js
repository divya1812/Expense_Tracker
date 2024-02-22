import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Intial State
const initialState = {
  transactions: [],
  error: undefined,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function handleErrorMsg(msg) {
    dispatch({
      type: "SET_ERROR",
      payload: msg,
    });
  }

  function handleResetErrorMsg() {
    dispatch({
      type: "RESET_ERROR",
      payload: undefined,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        handleErrorMsg,
        handleResetErrorMsg,
        error: state.error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
