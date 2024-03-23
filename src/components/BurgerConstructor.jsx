import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientPropTypes from './propTypes/ingredientTypes';

function BurgerConstructor({ data }) {
  return (
    <ul className="list-group ">
      {data.map((x, i) => (
        <li key={x._id} className="list-group-item bg-black">
          <ConstructorElement
            type={
              (i + 1 === data.length ? 'bottom' : null) ||
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
BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(IngredientPropTypes())),
};
export default BurgerConstructor;
