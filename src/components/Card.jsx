import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import './Card.module.css';

function Card({ item, handleSelectedClick }) {
  return (
    <div
      key={item._id}
      className="card bg-black text-white custom-card"
      onClick={() => handleSelectedClick(item)}
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
