import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Card from './Card';
import './BurgerIngredients.css';
import Modal from './Modal';
import IngredientDetails from './modals/IngredientDetails';
import IngredientPropTypes from './propTypes/ingredientTypes';

function BurgerIngredients({ data }) {
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  function handleKeyUp(e) {
    if (e.key === 'Escape') setOpen(false);
  }
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
      <div className="row">
        <div className="col-6 offset-4">
          <p
            className="text-white text text_type_main-large mt-10 mr-8"
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
      <div className="scroll-bar">
        <div className="row  justify-content-end">
          <div className="col-7-5 ">
            <div className="row row-cols-2">
              {data.map((x) => (
                <div className="col ">
                  <Card
                    key={x._id}
                    item={x}
                    handleSelectedClick={handleSelectedClick}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && modal}
    </>
  );
}
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(IngredientPropTypes())),
};
export default BurgerIngredients;
