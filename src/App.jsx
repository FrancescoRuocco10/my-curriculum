import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main_principal from './components/Main_principal/Home';
import About_Me from './components/About_Me/AboutMe';
import ScrollSpy from './components/Navbar/Scrollspy';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certification/Certifications';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
      <ScrollSpy />
      <Navbar />
      <Main_principal />
      <About_Me />
      <Experience />
      <Certifications />
      <Form />
      <Contacts />
    </>
  );
}

export default App;