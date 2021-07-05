import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__background" onClick={props.onDismiss}></div>

      <div className="modal__inner">
        <div className="modal__header">{props.title}</div>
        <div className="modal__content">{props.content}</div>
        <div className="modal__actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal-wrapper')
  );
};

export default Modal;
