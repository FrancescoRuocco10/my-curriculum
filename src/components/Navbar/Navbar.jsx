import React, { useState } from 'react';
import './style/Navbar.css';
import My_Avatar from './image/AI_mio_computer.png';
import { Link } from 'react-scroll';
import useHideOnScroll from './HideOnScroll';

const Navbar = () => {
  const [show, setShow] = useState(true);

  useHideOnScroll(setShow);

  return (
    <nav className={`navbar ${show ? 'navbar--visible' : 'navbar--hidden'}`}>

      <div className="navbar_container">

        <div className="navbar_logo">

          <img src={My_Avatar} alt="Io" className="navbar_image" />
          <p>My CV</p>

        </div>

        <ul className="navbar_list">

          <li><Link to="Home" smooth={true}>Home</Link></li>
          <li><Link to="AboutMe" smooth={true}>About me</Link></li>
          <li><Link to="Experience" smooth={true}>Experience</Link></li>
          <li><Link to="Certifications" smooth={true}>Certifications</Link></li>
          <li><Link to="Form" smooth={true}>Form</Link></li>
          <li><Link to="Contacts" smooth={true}>Contacts</Link></li>

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;