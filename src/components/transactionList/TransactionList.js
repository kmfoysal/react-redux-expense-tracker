import React from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from "../../assets/images/delete.svg";
import EditIcon from "../../assets/images/edit.svg";
import { editEnable } from '../../features/transaction/transactionSlice';


const TransactionList = ({ transaction }) => {

  const {name, type, amount} = transaction;

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editEnable(transaction))
  }

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link" onClick={handleEdit}>
          <img className="icon" src={EditIcon} alt="icon" />
        </button>
        <button className="link">
          <img className="icon" src={DeleteIcon} alt="icon" />
        </button>
      </div>
    </li>
  );
};

export default TransactionList;