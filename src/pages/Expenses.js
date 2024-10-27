import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ExpenseList from '../components/ExpenseList';

function Expenses() {
  const { expenses, setExpenses } = useContext(AppContext);

  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseList expenses={expenses} />
      {/* Additional expense management UI */}
    </div>
  );
}

export default Expenses;
