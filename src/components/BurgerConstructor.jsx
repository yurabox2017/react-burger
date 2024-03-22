import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
  return (
    <ul className="list-group ">
      {props.data.map((x, i) => (
        <li key={x._id} className="list-group-item bg-black">
          <ConstructorElement
            type={
              (i + 1 === props.data.length ? 'bottom' : null) ||
              (i === 0 ? 'top' : null)
            }
            isLocked={true}
            text={x.name}
            price={x.price}
            thumbnail={x.image}
          />
        </li>
      ))}
    </ul>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  },
};
