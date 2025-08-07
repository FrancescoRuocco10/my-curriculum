import React from 'react';
import './style/Certifications.css';
import avatar1 from './image/avatar1.png';

const certifications = [
  'Formatemp - Web Developer - 2025',
  'Posteitaliane - Educazione Finanziaria - 2025',
  'Learnn Verified - Social Media Strategy - 2025',
  'IBM - AI Fundamentals - 2025',
  'IBM - Information Technology Foundamentals - 2025',
  'IBM - Web Development Fundamentals - 2025',
  'IBM - Working in a Digital World Professional Skills - 2025',
  'Canva - AI in the classroom - 2025',
  'Canva - Canva Essentials - 2025',
  'Canva - Canva for Work - 2025',
  'Canva - Graphic Design Essentials - 2025',
  'Canva - Marketing with Canva - 2025',
  'Canva - The field guide to Human-Centered Design - 2025',
  "ASL Napoli - Formazione/aggiornamento per addetti alle attività connesse all'igiene degli alimenti - 2024",
  'Apple - Apple Search Ads - 2024',
  'Miur - EIPASS: European Informatics Passport - 2024',
  "Commissariato di Polizia - Porto d'Armi - 2024",
  'Google - Google Digital Training - 2023',
  'Lacerba.io - Principi di Microsoft Excel - 2023',
  'Lacerba.io - Grafica - 2023',
  'Salesforce - Admin Beginner - 2022',
  'Cisco - CCNAv7: Introduction to Networks - 2022',
  'Cisco - CCNAv7: Switching, Routing, and Wireless Essentials - 2022',
  'Cisco - Introduction to Cybersecurity - 2022',
  'Cisco - PCAP: Programming Essentials in Python - 2022',
  'Accenture - Job Lab Smart Education - 2022',
  'Oracle - Academy Database Foundations - 2022',
  'Oracle - Academy Java Foundations - 2021',
  'ASSE4 - Sicurezza Generale Formatemp - 2021',
  'Adecco - Sicurezza Sul Lavoro - 2021',
  'Cisco - IT Essentials - 2020',
  'Cisco - Introduzione a Internet of Everything - 2020',
  'Unicredit Startup Your Life - Educazione Imprenditoriale - 2020',
  'Unicredit Startup Your Life - Educazione Finanziaria - 2019',
  'Southern Italy Chapter - Introduzione al Project Management - 2019',
  'CSV Napoli - Volontariato - 2016',
];

const Certifications = () => {
  return (

      <section id="Certifications">

        <div className="certifications-container">

          <img src={avatar1} alt="avatar1"></img>

          <h1 className="certifications-central-title">CERTIFICATIONS</h1>

          <div className="wave-grid">

            {certifications.map((cert, i) => (

              <div key={i} className="wave-grid-item" style={{ '--i': i }}>
                {cert}
              </div>

            ))}

          </div>

        </div>

      </section>

  );
};

export default Certifications;