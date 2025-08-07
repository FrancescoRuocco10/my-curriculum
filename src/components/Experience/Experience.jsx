import React from 'react';
import './style/Experience.css';
import icon1 from './image/ufficio.png';
import icon2 from './image/luogo.png';
import ImageSwiper from './ImageSwiper';

function Experience() {
  return (
    <section id="Experience">

      <div className="experience-container">

        <div className="experience-text">

          <p className="title1_Experience">WORK EXPERIENCE</p>

          <p className="subtitle_Experience">
            <img src={icon1} alt="icon" />
            Catania Network - Supermercato Dodecà
          </p>

          <br />

          <p className="subtitle_Experience">
            <img src={icon2} alt="icon" />
            Mugnano di Napoli (Via Giuseppe di Vittorio, 80018, Mugnano di Napoli, Italia)
          </p>

          <br />

          <p className="subtitle_Experience">Tipo contratto: Tirocinante</p>

          <p className="mansione_Experience">Scaffalista 02/05/2024 - 02/05/2025</p>

          <p className="subtitle_Experience">
            Mansioni:
            <br />
            1. Assistere, consigliare e servire i clienti;
            <br />
            2. Organizzare l'esposizione della merce;
            <br />
            3. Preparare il materiale per la vendita;
            <br />
            4. Curare la pulizia e il riordino degli ambienti;
            <br />
            5. Preparare la merce da consegnare;
            <br />
            6. Emettere o controllare fatture o ricevute fiscali;
            <br />
            7. Allestire le vetrine;
            <br />
            8. Aprire e chiudere l'esercizio commerciale;
            <br />
            9. Ricevere e controllare le merci in arrivo;
            <br />
            10. Smistare, inventariare e stoccare la merce;
            <br />
            11. Curare il rifornimento degli scaffali;
            <br />
            12. Entrare le pedane prima della chiusura del negozio.
          </p>

        </div>

        <div className="experience-image-slider-container">

          <div className="swiper-wrapper-container">

            <ImageSwiper />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;