import PropTypes from 'prop-types';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientPropTypes from './propTypes/ingredientTypes';
import './BurgerConstructor.css';

function BurgerConstructor({ ingredients, setOpen }) {
  return (
    <>
      <div className="row pt-25">
        <div className="col-12 text-center ">
          <ul className="list-group burger-constructor-scroll-bar">
            {ingredients.map((x, i) => (
              <li key={x._id} className="list-group-item bg-black">
                <ConstructorElement
                  type={
                    (i + 1 === ingredients.length ? 'bottom' : null) ||
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
        </div>
      </div>
      <div className="row pt-10">
        <div className="col offset-1 align-self-center text-end">
          <p className="text text_type_digits-medium text-white align-self-center">
            610 <CurrencyIcon type="primary" />
          </p>
        </div>
        <div className="col">
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => setOpen(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
}
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientPropTypes())),
};
export default BurgerConstructor;
