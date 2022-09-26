import React from 'react';
import EditIcon from "../../assets/images/edit.svg";
import DeleteIcon from "../../assets/images/delete.svg";


const EarningStatus = () => {
    return (
      <div class="conatiner_of_list_of_transactions">
        <ul>
          <li class="transaction income">
            <p>Earned this month</p>
            <div class="right">
              <p>৳ 100</p>
              <button class="link">
                <img class="icon" src={EditIcon} alt='icon' />
              </button>
              <button class="link">
                <img class="icon" src={DeleteIcon} alt='icon'/>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
};

export default EarningStatus;