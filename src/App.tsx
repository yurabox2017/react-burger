import React, { useState, useEffect } from 'react';
import AppHeader from './components/headers/AppHeader';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import './App.css';
import Modal from './components/Modal';
import OrderDetails from './components/modals/OrderDetails';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [ingredients, setData] = useState([]);
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText);
        }
        const json = await response.json();
        setData(json.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const modal = (
    <Modal setOpen={setOpen}>
      <OrderDetails />
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
            <BurgerConstructor ingredients={ingredients} setOpen={setOpen} />
          </div>
        </div>
      </main>
      {isOpen && modal}
    </>
  );
}

export default App;
