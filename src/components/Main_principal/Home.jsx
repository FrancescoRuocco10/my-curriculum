import React from 'react';
import './style/Home.css';
import fotoProfilo from './image/AI_io.png';

function HomePage() {
  return (
    <section id="Home">

      <div className="home-container">

        <div className="home-container2">

          <img src={fotoProfilo} alt="Foto profilo" className="foto" />

          <div className="testo">

            <h1>F R A N C E S C O<br />R U O C C O</h1>

            <p className="testo2">C o m p u t e r<br />P r o g r a m m e r</p>

            <br/>

            <a href="#AboutMe" className="start-button">START</a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HomePage;