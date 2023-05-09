import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleButtonClick() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Abrir modal
      </Button>
      <Modal show={showModal}>
        <h1>¡Hola desde el modal!</h1>
        <Button onClick={handleModalClose}>
          Cerrar modal
        </Button>
      </Modal>
    </div>
  );
}

export default App;
