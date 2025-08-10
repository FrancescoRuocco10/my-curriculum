import React from 'react';
import './style/AboutMe.css';
import avatar2 from './image/avatar2.png';
import immagine1 from './image/Access.png';
import immagine2 from './image/Excel.png';
import immagine3 from './image/PowerPoint.png';
import immagine4 from './image/Word.png';
import immagine5 from './image/Visualstudio.png';
import immagine6 from './image/Sql.png';
import immagine7 from './image/C++.png';
import immagine8 from './image/Html.png';
import immagine9 from './image/Css.png';
import immagine10 from './image/Javascript.png';
import immagine11 from './image/Php.png';
import immagine12 from './image/Python.png';
import immagine13 from './image/React.png';
import immagine14 from './image/Tailwind.png';
import immagine15 from './image/Three.png';
import immagine16 from './image/React.png';
import immagine17 from './image/Vue.png';
import immagine18 from './image/Json.png';

function About_Me() {
  return (
    <section id="AboutMe">

      <div className="about-container">

        <div className="text left">

          <p className="title1">ABOUT ME</p>
          <p className="description">Ciao, mi chiamo Francesco Ruocco sono nato l'11/09/2002
            e provengo da Mugnano di Napoli, in provincia di Napoli.
            Ho conseguito il diploma presso l'Istituto Tecnico Industriale
            'Galileo Ferraris' di Scampia.
            Sono un giovane informatico appassionato e fortemente motivato,
            pronto ad avviare il mio percorso professionale nel campo della
            programmazione. Mi distinguo per un atteggiamento proattivo, una naturale
            predisposizione al lavoro di squadra e una costante voglia di apprendere.
            Sono una persona socievole, dinamica e determinata a crescere sia a livello
            personale che professionale.
          </p>

          <br /><br />

          <p className="title2">EDUCATION</p>
          <p className="description">I.T.I. Galileo Ferraris, Scampia 2017 - 2022</p>
          <p className="description">Informatica</p>
          <p className="description">Via Antonio Labriola Lotto 2G, 80145 Napoli NA</p>
          <p className="description">Diplomato con 88/100.</p>

        </div>

        <div className="image">

          <img src={avatar2} alt="avatar2" />

        </div>

        <div className="text right">

          <p className="title2">SOFTWARE SKILLS</p>
          <img src={immagine1} alt="m_access" className="image1" />
          <img src={immagine2} alt="m_excel" className="image1" />
          <img src={immagine3} alt="m_powerpoint" className="image1" />
          <img src={immagine4} alt="m_word" className="image1" />
          <img src={immagine5} alt="visualstudio" className="image1" />
          <img src={immagine6} alt="mysql" className="image1" />

          <br /><br />

          <p className="title2">LANGUAGES SKILLS</p>
          <img src={immagine7} alt="c++" className="image1" />
          <img src={immagine8} alt="html" className="image1" />
          <img src={immagine9} alt="css" className="image1" />
          <img src={immagine10} alt="c++" className="image1" />
          <img src={immagine11} alt="php" className="image1" />
          <img src={immagine12} alt="python" className="image1" />

          <br /><br />

          <p className="title2">OTHER SKILLS (LIBRARIES, FRAMEWORKS, DATA EXCHANGE)</p>
          <img src={immagine15} alt="three" className="image1" />
          <img src={immagine16} alt="react" className="image1" />
          <img src={immagine17} alt="vue" className="image1" />
          <img src={immagine18} alt="json" className="image1" />
          <img src={immagine14} alt="tailwind" className="image1" />

        </div>

      </div>

    </section>
  );
}

export default About_Me;
