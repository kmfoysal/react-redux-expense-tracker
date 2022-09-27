import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import TransactionList from '../transactionList/TransactionList';

const AllTransactionList = () => {

    const dispatch = useDispatch();

    const { transactions, isLoading, isError, error } = useSelector(
      (state) => state.transactions
    );

    useEffect(()=>{

      dispatch(fetchTransactions())

    },[dispatch])


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