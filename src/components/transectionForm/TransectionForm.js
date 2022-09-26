import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../../features/transaction/transactionSlice';

const TransectionForm = () => {

  const [name, setName] = useState('');
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const {isLoading, isError, error} = useSelector(state=> state.transactions);


  const handleForm = (e) => {
      e.preventDefault();
      dispatch(createTransaction({
        name,
        type,
        amount: Number(amount)
      }))
      setAmount('');
      setName('')
  }

    return (
      <div>
        <h3>Add new transaction</h3>

        <form onSubmit={handleForm}>
          <div className="form-group">
            <label htmlFor="transaction_name">Name</label>
            <input
              type="text"
              name="transaction_name"
              placeholder="Enter Title"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group radio">
            <label htmlFor="transaction_type">Type</label>
            <div className="radio_group">
              <input
                type="radio"
                value="income"
                name="transaction_type"
                required
                checked={type === "income"}
                onChange={(e) => setType("income")}
              />
              <label htmlFor="transaction_type">Income</label>
            </div>
            <div className="radio_group">
              <input
                type="radio"
                value="expense"
                name="transaction_type"
                placeholder="Expense"
                checked={type === "expense"}
                onChange={(e) => setType("expense")}
              />
              <label htmlFor="transaction_type">Expense</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="transaction_amount">Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              name="transaction_amount"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button disabled={isLoading} className="btn" type="submit">
            Add Transaction
          </button>
        </form>

        {isError && !isLoading && <p>{error}</p>}
      </div>
    );
};

export default TransectionForm;