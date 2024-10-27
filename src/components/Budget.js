import React from 'react';

function Budget({ category, amount, spent }) {
  return (
    <div>
      <h2>{category}</h2>
      <p>Budgeted: ${amount}</p>
      <p>Spent: ${spent}</p>
      <p>Remaining: ${amount - spent}</p>
    </div>
  );
}

export default Budget;
