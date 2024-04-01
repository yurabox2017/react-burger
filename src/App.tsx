import { useState, useEffect } from 'react';
import AppHeader from './components/headers/AppHeader';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import './App.css';
import Modal from './components/Modal';
import OrderDetails from './components/modals/OrderDetails';
import { IngredientsContext } from './services/IngredientsContext';

function App() {
  const initOrder = {
    name: '',
    order: {
      number: '',
    },
    success: false,
  };
  const [isOpen, setOpen] = useState(false);
  const [ingredients, setData] = useState([]);
  const [constructorItems, setItem] = useState([]);
  const [order, setOrder] = useState(initOrder);
  const BASE_URL = 'https://norma.nomoreparties.space/api';

  const fetchData = async (endPoint: any, options: any) => {
    try {
      const response = await fetch(`${BASE_URL}/${endPoint}`, options);
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      return response.json();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const options = { method: 'get' };
    fetchData('ingredients', options).then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    if (isOpen) {
      console.log(constructorItems);
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          ingredients: constructorItems,
        }),
      };
      fetchData('orders', options).then((data) => setOrder(data));
    }
  }, [isOpen]);

  const showModalClick = () => {
    setOpen(true);
  };

  const modal = (
    <Modal setOpen={setOpen}>
      <OrderDetails {...order} />
    </Modal>
  );

  return (
    <>
      <header className="bg-grey">
        <AppHeader />
      </header>
      <main className="bg-black main-scroll-bar">
        <div className="row mx-0">
          <div className="col text-center">
            <IngredientsContext.Provider value={ingredients}>
              <BurgerIngredients ingredients={ingredients} />
            </IngredientsContext.Provider>
          </div>
          <div className="col">
            <IngredientsContext.Provider value={ingredients}>
              <BurgerConstructor
                showModalClick={showModalClick}
                constructorItems={constructorItems}
                setItem={setItem}
              />
            </IngredientsContext.Provider>
          </div>
        </div>
      </main>
      {isOpen && modal}
    </>
  );
}

export default App;
