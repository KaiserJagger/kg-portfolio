import {React, useEffect} from 'react';
import './styles/GlobalStyles.css';
import './styles/Introduction.css'


const Introduction = () => {
  useEffect(() => {
    const designCardButtons = document.querySelectorAll('.design-card');
    const introductionText = document.querySelectorAll('.introduction-text');

    designCardButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        introductionText.forEach((introduction, introductionIndex) => {
          if (index === introductionIndex) {
            introduction.style.display = 'block';
          } else {
            introduction.style.display = 'none';
          }
        });
        designCardButtons.forEach((btn, btnIndex) => {
          if (index === btnIndex) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      });
    });
  }, []);

  
  return (
    <section id="introduction">
      <div className="introduction-header">
        <h2 className="title-intro">Featured skills </h2>
      </div>
      <div className="content-container">
    <div className="cards">
      <div className="design-card active">

        <div>
        <h3 className='title-card'>Backend Development</h3>
          <i className="icono fas fa-terminal"></i>
        </div>
        <p>Crafting High-Performance Web Systems</p>
      </div>
        <div className="design-card">
          <div>
            <h3 className='title-card'>Frontend Development</h3>
            <i className="icono fas fa-code"></i>
          </div>
          <p>Crafting User Interfaces</p>
          
        </div>
        <div className="design-card">
          <div>
            <h3 className='title-card'>Database Administrator</h3>
            <i className="icono fa-solid fa-database"></i>
          </div>
          <p>Mastery of MySQL Database Management</p>
        </div>
      </div>
      </div>
      <div id="introduction-1" className="introduction-text">
        <h2>Backend Development</h2>
        <p>As a backend developer, I specialize in crafting reliable and high-performance systems using JavaScript, Node.js, and MongoDB. 
          My expertise spans various domains, including e-commerce, live chat integration, server creation with Express, 
          and the implementation of APIs
        </p>
      </div>
      <div id="introduction-2" className="introduction-text" style={{ display: 'none' }}>
        <h2>Frontend Development</h2>
        <p>As a frontend designer, my passion is bringing engaging and highly functional user interfaces to life. 
          I utilize my expertise in HTML, CSS, and JavaScript, along with my current focus on implementing React, 
          to create intuitive and visually striking user experiences.
        </p>
      </div>
      <div id="introduction-3" className="introduction-text" style={{ display: 'none' }}>
        <h2>Database Administrator</h2>
        <p>I not only focus on the development of backend and frontend applications, but also design efficient databases, 
          create schemas, optimize SQL queries, and manage data security. This secondary skill enables me to tackle 
          projects that involve a high volume of data.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
