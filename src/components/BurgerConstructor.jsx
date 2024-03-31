import { useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientPropTypes from './propTypes/ingredientTypes';
import './BurgerConstructor.css';
import { IngredientsContext } from '../services/IngredientsContext';

function filterIngredients(item, type) {
  switch (type) {
    case 'bun':
      return item.type === type && item._id === '643d69a5c3f7b9001cfa093c';
    case 'sauce':
      return item.type === type;
    default:
      throw new Error(`Wrong type of action: ${type}`);
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'totalPrice':
      return action.payload;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function BurgerConstructor({ setOpen, constructorItems, setItem }) {
  const ingredients = useContext(IngredientsContext);
  const [totalPrice, dispatch] = useReducer(reducer, []);

  const typeValue = (i) => {
    return (
      (i === 0 ? 'top' : null) ||
      (i + 1 === constructorItems.length ? 'bottom' : null)
    );
  };

  const setConstructorItem = () => {
    const item = ingredients.filter((x) => filterIngredients({ ...x }, 'bun'));
    const sauce = ingredients.filter((x) =>
      filterIngredients({ ...x }, 'sauce')
    );

    setItem(item);
    setItem((prevItem) => [...prevItem, ...sauce]);
    setItem((prevItem) => [...prevItem, ...item]);
  };

  useEffect(() => {
    setConstructorItem();
  }, [ingredients]);

  useEffect(() => {
    let total = 0;
    constructorItems.map((item) => (total += item.price));
    dispatch({ type: 'totalPrice', payload: total });
  }, [constructorItems, dispatch]);

  return (
    <>
      <div className="row pt-25">
        <div className="col-12 text-center ">
          <ul className="list-group burger-constructor-scroll-bar">
            {constructorItems?.map((x, i) => (
              <li key={i} className="list-group-item bg-black">
                <ConstructorElement
                  type={typeValue(i)}
                  isLocked={true}
                  text={`${x.name} ${
                    typeValue(i) === 'top' ? '(верх)' : '(низ)'
                  }`}
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
            {totalPrice} <CurrencyIcon type="primary" />
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
