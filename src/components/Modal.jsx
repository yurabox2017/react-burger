import './Modal.css';
import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import useOutsideClick from '../customHooks/useOutsideClick';
const modalRoot = document.getElementById('modals');

function Modal({ children, setOpen, header = '' }) {
  // Возвращаем ReactDOM.createPortal,
  // который поместит дочерние элементы в modalRoot
  useEffect(() => {}, []);

  // const ref = useOutsideClick(setOpen(false));
  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade show "
        tabIndex="-1"
        role="dialog"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header border border-0 bg-custom-black ">
              <h5 className="modal-title bg-custom-black text-white pl-10">
                <p className="text text_type_main-large">{header}</p>
              </h5>
              <h2
                className="text-white"
                onClick={() => setOpen(false)}
                style={{ cursor: 'pointer' }}
              >
                &times;
              </h2>
            </div>
            <div className="modal-body bg-custom-black">{children}</div>
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        onClick={() => console.log('click')}
        style={{ display: 'block' }}
      ></div>
    </>,
    modalRoot
  );
}
export default Modal;
