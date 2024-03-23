import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import IngredientDetails from './modals/IngredientDetails';
import Modal from './Modal';

function Card({ item, handleSelectedClick }) {
  return (
    <div
      // key={item._id}
      className="card bg-black text-white"
      onClick={() => handleSelectedClick(item)}
      style={{ width: '18rem', cursor: 'pointer' }}
    >
      <Counter count={1} size="small" />
      <img src={item.image} className="card-img-top" />
      <div className="card-body">
        <div className="d-flex flex-row justify-content-center">
          <h5 className="card-title pr-2">{item.price}</h5>
          <span>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <p className="card-text">{item.name}</p>
      </div>
    </div>
  );
}

export default Card;
