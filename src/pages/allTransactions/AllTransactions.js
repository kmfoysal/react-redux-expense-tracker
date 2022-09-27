import React from 'react';
import AllTransactionList from '../../components/allTransactionList/AllTransactionList';

const AllTransactions = () => {
    return (
      <div className="App">
        <div className="header">
          <h1>Expense Tracker</h1>
        </div>

        <div className="main">
          <div className="container">
            <div className="form-group radio">
              <label htmlFor="transaction_type">Filtered By :</label>
              <div className="radio_group">
                <input
                  type="radio"
                  value="income"
                  name="transaction_type"
                  required
                //   checked={type === "income"}
                //   onChange={(e) => setType("income")}
                />
                <label htmlFor="transaction_type">Income</label>
              </div>
              <div className="radio_group">
                <input
                  type="radio"
                  value="expense"
                  name="transaction_type"
                  placeholder="Expense"
                //   checked={type === "expense"}
                //   onChange={(e) => setType("expense")}
                />
                <label htmlFor="transaction_type">Expense</label>
              </div>
            </div>

            <AllTransactionList />
          </div>
        </div>

        <div className="footer">
          &copy; 2022 K.M Foysal | All Right Reserved.
        </div>
      </div>
    );
};

export default AllTransactions;