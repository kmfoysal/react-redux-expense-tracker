import React from 'react';
import DeleteIcon from "../../assets/images/delete.svg";
import EditIcon from "../../assets/images/edit.svg";


const EarningStatus = () => {
    return (
      <div className="conatiner_of_list_of_transactions">
        <ul>
          <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
              <p>৳ 100</p>
              <button className="link">
                <img className="icon" src={EditIcon} alt='icon' />
              </button>
              <button className="link">
                <img className="icon" src={DeleteIcon} alt='icon'/>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
};

export default EarningStatus;