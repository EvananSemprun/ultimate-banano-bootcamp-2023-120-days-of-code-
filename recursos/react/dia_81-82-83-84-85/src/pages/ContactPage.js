import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // aquí puedes agregar la lógica para enviar los datos del formulario a un servidor o servicio de correo electrónico
    } else {
      console.log('Formulario inválido');
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El correo electrónico es inválido';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'El asunto es requerido';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Asunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
          {formErrors.subject && <span className="error">{formErrors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
        </div>

        <button className="submit-button" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactPage;