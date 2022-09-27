import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from "../../assets/images/delete.svg";
import EditIcon from "../../assets/images/edit.svg";
import { editEnable, removeTransaction } from '../../features/transaction/transactionSlice';


const TransactionList = ({ transaction }) => {

  const {name, type, amount, id} = transaction;

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editEnable(transaction))
  }

  const handleDelete = () => {
    dispatch(removeTransaction(id))
  }

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src={EditIcon} alt="icon" />
        </button>
        <button className="link" onClick={handleDelete}>
          <img className="icon" src={DeleteIcon} alt="icon" />
        </button>
      </div>
    </li>
  );
};

export default TransactionList;