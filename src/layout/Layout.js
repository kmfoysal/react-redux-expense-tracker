import React from 'react';
import BalanceStatus from '../components/balanceStatus/BalanceStatus';
import EarningStatus from '../components/earningStatus/EarningStatus';
import TransectionForm from '../components/transectionForm/TransectionForm';

const Layout = () => {
    return (
      <div class="App">
        <div class="header">
          <h1>Expense Tracker</h1>
        </div>

        <div class="main">
          <div class="container">
            <BalanceStatus />
            <TransectionForm />

            <p class="second_heading">Your Transactions:</p>

            <EarningStatus />
            
          </div>
        </div>

        <div class="footer">&copy;2022 Learn with Sumit</div>
      </div>
    );
};

export default Layout;