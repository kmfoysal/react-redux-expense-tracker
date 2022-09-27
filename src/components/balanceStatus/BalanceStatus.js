import React from 'react';
import { useSelector } from 'react-redux';
import getCalculations from '../../utils/getCalculations';

const BalanceStatus = () => {

  const {transactions} = useSelector((state)=>state.transactions)


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