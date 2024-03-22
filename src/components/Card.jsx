import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Card(props) {
  return props.data.map((x) => (
    <div
      key={x._id}
      className="card bg-black text-white"
      style={{ width: '18rem' }}
    >
      <Counter count={1} size="small" />
      <img src={x.image} className="card-img-top" />
      <div className="card-body">
        <div className="d-flex flex-row justify-content-center">
          <h5 className="card-title pr-2">{x.price}</h5>
          <span>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <p className="card-text">{x.name}</p>
      </div>
    </div>
  ));
}

export default Card;
