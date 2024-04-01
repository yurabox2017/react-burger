import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Card from './Card';
import './BurgerIngredients.css';
import Modal from './Modal';
import IngredientDetails from './modals/IngredientDetails';
import IngredientPropTypes from './propTypes/ingredientTypes';
import { IngredientsContext } from '../services/IngredientsContext';

function BurgerIngredients() {
  const ingredients = useContext(IngredientsContext);
  const [current, setCurrent] = useState('one');
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, selectedIngredient] = useState(null);

  const modal = (
    <Modal header="Детали ингредиента" setOpen={setOpen}>
      <IngredientDetails item={selectedItem} />
    </Modal>
  );

  const handleSelectedClick = (item) => {
    selectedIngredient(item);
    setOpen(true);
  };
  return (
    <>
      <div className="row ms-auto " style={{ width: '625px' }}>
        <div className="col mx-0  text-start">
          <p
            className="text-white text text_type_main-large mt-10"
            style={{ marginBottom: '20px' }}
          >
            Соберите бургер
          </p>
        </div>
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
        className="row mx-0 ms-auto  justify-content-end"
        style={{ width: '625px' }}
      >
        <div className="col scroll-bar">
          <div className="row row-cols-2">
            {ingredients.map((x, i) => (
              <div key={i} className="col ">
                <Card item={x} handleSelectedClick={handleSelectedClick} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpen && modal}
    </>
  );
}
BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientPropTypes())),
};
export default BurgerIngredients;
