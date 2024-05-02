import React from 'react';
import './styles/GlobalStyles.css';
import './styles/Contributions.css'

const MovieCard = () => {
  return (
    <div class="wrapper">
      <div className="title-contribution">Contributions</div>
      <div class="card">
        <div class="poster"><img src="/assets/Contributions/cont1.png" alt="Location Unknown"></img></div>
        <div class="details">
          <a className="url" href="https://www.epcrugby.com/" target="_blank" rel="noopener noreferrer">Epcrugby</a>
          <p>EPCRugby is the official site of the European Professional Club Rugby (EPCR), which includes tournaments such as the Investec Champions Cup and the PCR Challenge Cup. On the site, you can find schedules, results and match updates, team standings, videos, news , detailed statistics, entry information and fan competitions.</p>
          <div class="tags">
            <img className='js' src="/assets/javascript.png" alt="js" />
            <img className='vue' src="/assets/vue.png" alt="vue" />
            <img className='css' src="/assets/css.png" alt="css" />
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="poster"><img src="/assets/Contributions/cont2.png" alt="Location Unknown" ></img></div>
        <div class="details">
          <a className="url" href="https://petily.com.br/" target="_blank" rel="noopener noreferrer">Petily</a>
          <p>Petily is a pet care platform that offers user and pet registration, veterinary health center location, appointment booking and payments, and pet care advice.</p>
          <div class="tags">
            <img className='js' src="/assets/javascript.png" alt="js" />
            <img className='react' src="/assets/react.png" alt="react" />
            <img className='css' src="/assets/css.png" alt="css" />
            <img className='html' src="/assets/html.png" alt="html" />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="poster"><img src="/assets/Contributions/cont3.png" alt="Location Unknown"></img></div>
        <div class="details">
          <a className="url" href="https://www.flyplay.com/en" target="_blank" rel="noopener noreferrer">Flyplay</a>
          <p>PLAY is an Icelandic low-cost airline that operates flights between North America, Europe and Iceland. It offers affordable flights to various destinations, a modern and efficient fleet, a stay-at-home program in Iceland at no additional cost, easy-to-use online services and travel comfort options.</p>
          <div class="tags">
            <img className='js' src="/assets/javascript.png" alt="js" />
            <img className='react' src="/assets/react.png" alt="react" />
            <img className='css' src="/assets/css.png" alt="css" />
          </div>
        </div>
      </div>

      <div class="card">
        <div class="poster"><img src="/assets/Contributions/cont4.png" alt="Location Unknown"></img></div>
        <div class="details">
          <a className="url" href="https://www.fisch.hu/" target="_blank" rel="noopener noreferrer">Fisch.hu</a>
          <p>On the FEEDERMANIA website, you can find a variety of fishing products designed for feeder fishing, free shipping for orders over 15,000 Ft and shipping within the European Union, as well as information and articles on feeder fishing techniques and Tips for beginners and experienced anglers</p>
          <div class="tags">
            <img className='js' src="/assets/javascript.png" alt="js" />
            <img className='mysql' src="/assets/mysql.png" alt="mysql" />
            <img className='css' src="/assets/css.png" alt="css" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
