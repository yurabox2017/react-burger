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
  const ingredientsUrl = 'https://norma.nomoreparties.space/api/ingredients';
  const ordersUrl = 'https://norma.nomoreparties.space/api/orders';

  const fetchData = async (url: any, requestInit: any, func: any) => {
    try {
      const response = await fetch(url, requestInit);
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }
      const json = await response.json();
      setData(json.data);
    } catch (e) {
      console.log(e);
    }
  };

  const postData = (url: any, requestInit: any) => {
    fetch(url, requestInit)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => setOrder(data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    const req = { method: 'get' };
    fetchData(ingredientsUrl, req, setData);
  }, []);

  useEffect(() => {
    if (isOpen) {
      console.log(constructorItems);
      const req = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          ingredients: constructorItems,
        }),
      };
      postData(ordersUrl, req);
    }
  }, [isOpen]);

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
            <BurgerIngredients ingredients={ingredients} />
          </div>
          <div className="col">
            <IngredientsContext.Provider value={ingredients}>
              <BurgerConstructor
                setOpen={setOpen}
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
