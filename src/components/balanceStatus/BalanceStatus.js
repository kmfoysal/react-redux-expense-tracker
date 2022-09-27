import React from 'react';
import { useSelector } from 'react-redux';

const BalanceStatus = () => {

  const {transactions} = useSelector((state)=>state.transactions)

  const getCalculations = (transactions) => {

    let income = 0;

    let expense = 0;

    transactions.forEach((transaction) => {

      const { type, amount } = transaction;

      if (type === "income") {
        income += amount;
      }else if (type === "expense") {
        expense += amount;
      }

    });

    return { income, expense };
  };


  const values = getCalculations(transactions);


    return (
      <div className="top_card">
        <div>
          <p>Total Income</p>
          <h3>
            <span>৳ </span>
            <span>{values.income}</span>
          </h3>
        </div>
        <div>
          <p>Total Expense</p>
          <h3>
            <span>৳ </span>
            <span>{values.expense}</span>
          </h3>
        </div>
        <div>
          <p>Your Current Balance</p>
          <h3>
            <span>৳ </span>
            <span>{values.income - values.expense}</span>
          </h3>
        </div>
      </div>
    );
};

export default BalanceStatus;