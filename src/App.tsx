import React from 'react';
import AppHeader from './components/headers/AppHeader';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import { data } from './utils/data';
import './App.css';
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function App() {
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
            <div
              style={{
                overflowY: 'auto',
                overflowX: 'hidden',
                height: 'calc(100vh - 200px)',
              }}
            >
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
                <Button htmlType="button" type="primary" size="large">
                  Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
