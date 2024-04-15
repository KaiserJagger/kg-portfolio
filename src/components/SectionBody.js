import React from 'react';
import './styles/GlobalStyles.css';
import './styles/SectionBody.css';

const ContentBody = () => {

  return (
    <section id="content-body">
      <div className="body-part-1">
        <div className="developer-intro">
          <p>Freelance</p>
        </div>
        <div className="body-title">
          <h1>Full Stack Developer</h1>
          <p>Crafting dynamic web experiences where design meets seamless functionality</p>
        </div>
        <div className="body-tail">
          <h1>3</h1>
          <p>YEARS<br />EXPERIENCE</p>
          <h1>6</h1>
          <p>PROJECTS<br />COMPLETED</p>
        </div>
      </div>
      <div className="body-part-2">
      <div className="proyect-animation-class">
      <div className="hologram-content">
          <div className="circle">
            <span style={{ '--i': 1 }}><img className='node' src="/assets/node-js.png" alt="Node.js" /></span>
            <span style={{ '--i': 2 }}><img className='mdb' src="/assets/mongodb.png" alt="MongoDB" /></span>
            <span style={{ '--i': 3 }}><img className='kali' src="/assets/SVGIcons/kali-logo.svg" alt="Kali" /></span>
            <span style={{ '--i': 4 }}><img className='react' src="/assets/react.png" alt="React" /></span>
            <span style={{ '--i': 5 }}><img className='bsp' src="/assets/bootstrap.png" alt="Bootstrap" /></span>
            <span style={{ '--i': 6 }}><img className='css' src="/assets/SVGIcons/css3.svg" alt="CSS3" /></span>
            <span style={{ '--i': 7 }}><img className='js' src="/assets/SVGIcons/javascript.svg" alt="JavaScript" /></span>
            <span style={{ '--i': 8 }}><img className='msql' src="/assets/SVGIcons/MySQL-Dark.svg" alt="MySQL" /></span>
            <span style={{ '--i': 9 }}><img className='gh' src="/assets/SVGIcons/Github-Dark.svg" alt="GitHub" /></span>
            <span style={{ '--i': 10 }}><img className='html' src="/assets/html.png" alt="HTML" /></span>
            <span style={{ '--i': 11 }}><img className='ex' src="/assets/express.png" alt="express" /></span>
            <span style={{ '--i': 12 }}><img className='php' src="/assets/php.png" alt="express" /></span>
          </div>
          </div>
        </div>
        <div className="background-circle"></div>
      </div>
    </section>
  );
};

export default ContentBody;
