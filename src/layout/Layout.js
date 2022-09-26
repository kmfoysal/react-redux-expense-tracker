import React from 'react';
import AllTransactionList from '../components/allTransactionList/AllTransactionList';
import BalanceStatus from '../components/balanceStatus/BalanceStatus';
import TransectionForm from '../components/transectionForm/TransectionForm';

const Layout = () => {
  
    return (
      <div className="App">
        <div className="header">
          <h1>Expense Tracker</h1>
        </div>

        <div className="main">
          <div className="container">
            <BalanceStatus />

            <TransectionForm />

            <p className="second_heading">Your Transactions:</p>

            <AllTransactionList />

          </div>
        </div>

        <div className="footer">
          &copy; 2022 K.M Foysal | All Right Reserved.
        </div>
      </div>
    );
};

export default Layout;