import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from './EmailConfig';

export const useEmailForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      e.target,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success('Email inviata con successo!');
      setFormData(initialState);
      e.target.reset();
    })
    .catch(() => {
      toast.error('Invio email non riuscito');
    });
  };

  return { formData, handleChange, handleSubmit };
};