import React from 'react';
import { useSelector } from 'react-redux';
import TransactionList from '../transactionList/TransactionList';

const AllTransactionList = () => {

    const { transactions, isLoading, isError, error } = useSelector(
      (state) => state.transactions
    );


    let content = null;

    if (isLoading) {
        
        content = <p>Loading ...</p>
    }

    if (!isLoading && isError) {
        
        content = <p>{error}</p>
    }

    if (!isLoading && !isError && transactions?.length > 0) {
      content = transactions.map((transaction) => (
        <TransactionList key={transaction.id} transaction={transaction} />
      ));
    }


    if (!isLoading && !isError && transactions.length === 0) {
      content = <p>There are no transactions found</p>
    }


    return (
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    );
};

export default AllTransactionList;