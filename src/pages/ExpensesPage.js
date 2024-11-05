import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ExpenseList from '../components/ExpenseList';
import styles from './ExpensesPage.module.css';

function ExpensesPage() {
  const { expenses, setExpenses } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Expenses</h1>
      <ExpenseList expenses={expenses} />
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.elements.name.value;
          const amount = parseFloat(e.target.elements.amount.value);
          if (name && !isNaN(amount)) {
            setExpenses([...expenses, { name, amount }]);
            e.target.reset();
          }
        }}
      >
        <div>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input type="number" name="amount" required />
          </label>
        </div>
        <button type="submit" className={styles.button}>Add Expense</button>
      </form>
      {/* Additional expense management UI */}
    </div>
  );
}

export default ExpensesPage;