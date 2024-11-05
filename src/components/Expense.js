import React from 'react';
import styles from './Expense.module.css';

function Expense({ name, amount }) {
  return (
    <div className={styles.expenseItem}>
      <span className={styles.expenseName}>{name}</span>
      <span className={styles.expenseAmount}>${amount.toFixed(2)}</span>
    </div>
  );
}

export default Expense;