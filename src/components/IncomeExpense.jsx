import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export default function IncomeExpense() {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
      <div className="income-expense-container">
        <div className="income">
          <h4>INCOME</h4>
          <p className="amount plus">${income}</p>
        </div>
        <div className="expense">
          <h4>EXPENSE</h4>
          <p className="amount minus">${expense}</p>
        </div>
      </div>
    );
  }
