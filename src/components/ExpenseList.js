import React from 'react';
import Expense from './Expense';
import styles from './ExpenseList.module.css';

function ExpenseList({ expenses }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <Expense name={expense.name} amount={expense.amount} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;