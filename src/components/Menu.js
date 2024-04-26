/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './styles/Menu.css';
import './styles/SectionBody.css';
import { descargarPDF } from '../utils/util.js';


const Menu = () => {
  // Estado para controlar la visibilidad del menú en pantallas pequeñas
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para manejar el clic en el botón de menú
  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };
  
  const handleDescargarPDF = () => {
  const rutaArchivo = '/CVNicolásAndreolli.pdf'
  const nombreArchivo = 'CVNicolásAndreolli'
  descargarPDF(rutaArchivo, nombreArchivo);
  }

  return (
    <section id="header">
      <div className="navbar-title">
      <a className="active" href="#content-body"><h3 className="title-first-name">KaiserJagger</h3></a>
      
      </div>
      <div>
        {/* Botón de menú para pantallas pequeñas */}
        <button id="menu-toggle" onClick={handleMenuToggle}>
          &#9776; Menu
        </button>

        {/* Menú de navegación */}
        <ul className={`navbar-menu ${menuVisible ? 'active' : ''}`}>
          <li><a className="active" href="#content-body">Home</a></li>
          <li><a className="" href="#introduction">Skills</a></li>
          <li><a className="" href="#latest-works">Works</a></li>
          <li><a className="" href="#footer">Contact me</a></li>
        </ul>
      </div>
      <div>
        <ul className="social-media">
          <li>
            <i className="fab fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/nicol%C3%A1sandreolli/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <a href="https://github.com/KaiserJagger" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <i className="far fa-envelope"></i>
            <a href="mailto:kaiserjager10@gmail.com">Email</a>
          </li>
          <li>
            <i className="fa fa-id-badge"></i>
            <a onClick={handleDescargarPDF} target="_blank" rel="noopener noreferrer">CV</a>
          </li> 
        </ul>
      </div>
    </section>
  );
};

export default Menu;
