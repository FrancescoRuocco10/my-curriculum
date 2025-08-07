import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style/Form.css';
import { useEmailForm } from './UseEmailForm';
import avatar from './image/avatar.png';

const ContactForm = () => {
  const { formData, handleChange, handleSubmit } = useEmailForm({
    nome: '',
    cognome: '',
    azienda: '',
    email: '',
    testo: ''
  });

  return (
    <section id="Form">

      <div className="form-container">

        <div className="form-image">

          <img src={avatar} alt="avatar" />

        </div>

        <form onSubmit={handleSubmit} className="contact-form">

          <div>

            <p className="testo2_form">FORM</p><br />
            <label className="testo_form">Nome:</label><br />
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} required/>

          </div>

          <div>

            <label className="testo_form">Cognome:</label><br />
            <input type="text" name="cognome" value={formData.cognome} onChange={handleChange} required/>

          </div>

          <div>

            <label className="testo_form">Nome azienda:</label><br />
            <input type="text" name="azienda" value={formData.azienda} onChange={handleChange} required/>

          </div>

          <div>

            <label className="testo_form">Email:</label><br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required/>

          </div>

          <div>

            <label className="testo_form">Messaggio:</label><br />
            <textarea name="testo" value={formData.testo} onChange={handleChange} required rows="4"/>

          </div>

          <button type="submit" className="glass-glow-button">Invia</button>

        </form>

        <ToastContainer position="top-center" autoClose={3000} />

      </div>

    </section>
  );
};

export default ContactForm;