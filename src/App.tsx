import React, { useState, useEffect } from 'react';
import AppHeader from './components/headers/AppHeader';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import './App.css';
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from './components/Modal';
import useOutsideClick from './customHooks/useOutsideClick';
import OrderDetails from './components/modals/OrderDetails';
import { array } from 'prop-types';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [data, getData] = useState([]);
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  // const ref = useOutsideClick(setOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        getData(json.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    function handleKeyUp(e: any) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keyup', handleKeyUp);

    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  const modal = (
    <Modal setOpen={setOpen}>
      <OrderDetails />
    </Modal>
  );

  return (
    <>
      <header className="bg-dark">
        <AppHeader />
      </header>
      <main
        className="bg-black"
        style={{ height: 'calc(100vh - 82px)', overflow: 'hidden' }}
      >
        <div className="row">
          <div className="col text-center">
            <BurgerIngredients data={data} />
          </div>
          <div className="col">
            <div className="scroll-bar">
              <div className="row pt-25">
                <div className="col-12 text-center">
                  <BurgerConstructor data={data} />
                </div>
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
          </div>
        </div>
      </main>
      {isOpen && modal}
    </>
  );
}

export default App;
