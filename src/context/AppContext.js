import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [goals, setGoals] = useState([]);

  return (
    <AppContext.Provider value={{ expenses, setExpenses, budgets, setBudgets, goals, setGoals }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
