import './Modal.css';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from './modals/ModalOverlay';

const modalRoot = document.getElementById('modals');

function Modal({ children, setOpen, header = '' }) {
  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, []);

  function handleKeyUp(e) {
    if (e.key === 'Escape') setOpen(false);
  }

  return ReactDOM.createPortal(
    <>
      <div
        className="modal fade show "
        tabIndex="-1"
        role="dialog"
        style={{
          display: 'block',
          width: '39%',
          left: '30%',
          overflow: 'hidden',
        }}
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
      <ModalOverlay setOpen={setOpen} />
    </>,
    modalRoot
  );
}
export default Modal;
