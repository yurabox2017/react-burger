import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Card from './Card';
import './BurgerIngredients.css';

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one');
  return (
    <>
      <div className="d-flex w-75 justify-content-end">
        <p
          className="text-white text text_type_main-large mt-10 mr-6"
          style={{ marginBottom: '20px' }}
        >
          Соберите бургер
        </p>
      </div>
      <div className="d-flex flex-row justify-content-end">
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div
        style={{
          overflowY: 'auto',
          overflowX: 'hidden',
          height: 'calc(100vh - 260px)',
        }}
      >
        <div className="d-flex w-custom flex-wrap ms-auto justify-content-end">
          <Card {...props} />
        </div>
      </div>
    </>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: {
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  },
};
