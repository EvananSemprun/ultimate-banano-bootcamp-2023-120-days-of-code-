import React from 'react';

import './Modal.css';
function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
