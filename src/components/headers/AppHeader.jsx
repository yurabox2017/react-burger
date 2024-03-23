import { Component } from 'react';
import {
  Logo,
  ProfileIcon,
  ListIcon,
  BurgerIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <div className="row text-center align-items-center  text-white m-0 bg-dark">
      <div className="col text-end my-3">
        <BurgerIcon type="primary" />
        <span className="mx-2 text text_type_main-default">Конструктор</span>
        <ListIcon type="primary" />
        <span className="ml-2 mr-10  text_type_main-default">
          Лента заказов
        </span>
      </div>
      <div className="col-3 my-3">
        <a href="#">
          <Logo />
        </a>
      </div>
      <div className="col my-3">
        <ProfileIcon type="primary" />
        <span className="mx-2 text_type_main-default">Личный кабинет</span>
      </div>
    </div>
  );
}

export default AppHeader;
