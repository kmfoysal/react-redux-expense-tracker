import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { fetchTransactions } from '../../features/transaction/transactionSlice';
import TransactionList from '../transactionList/TransactionList';

const AllTransactionList = () => {

    const dispatch = useDispatch();

    const location = useLocation();


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

    if (!isLoading && !isError && transactions?.length > 0 && location.pathname === '/') {
      content = transactions.slice(-5).map((transaction) => (
        <TransactionList key={transaction.id} transaction={transaction} />
      )).reverse()
    }


    if (
      !isLoading &&
      !isError &&
      transactions?.length > 0 &&
      location.pathname === "/allTransactions"
    ) {
      content = transactions
        .map((transaction) => (
          <TransactionList key={transaction.id} transaction={transaction} />
        ))
    }


    if (!isLoading && !isError && transactions.length === 0) {
      content = <p>There are no transactions found</p>
    }


    return (
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>

        {location.pathname === "/" && (
          <Link to="/allTransactions">
            <button className="btn">View All</button>
          </Link>
        )}
      </div>
    );
};

export default AllTransactionList;