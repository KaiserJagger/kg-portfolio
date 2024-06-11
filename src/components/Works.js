
import React, { useState }from 'react';
import './styles/GlobalStyles.css';
import './styles/Works.css'

const LatestWorks = () => {
  const [pressedCards, setPressedCards] = useState([]);

  const handleCardClick = (index) => {
    setPressedCards((prevPressedCards) => {
      const updatedPressedCards = [...prevPressedCards];
      updatedPressedCards[index] = !updatedPressedCards[index];
      return updatedPressedCards;
    });
  };

  return (
    <section id="latest-works">
      <div className="title-works">Projects</div>
      <div className="left-project">
       <div className="flip-card" onClick={() => handleCardClick(0)}>
        <div className={`flip-card-inner${pressedCards[0] ? ' pressed' : ''}`}>
            <div class="flip-card-front">
              <p class="title">DSJ</p>
              <p className='description'>San Juan Distributions</p>
            <img src="assets/Projects/project-1.png" alt="" className="dsj" />
          </div>
          <div class="flip-card-back">
            <p className='title-cards'>NodeJS - MongoDB - Bootstrap</p>
            <p className='text-card'>I highlight this project as an e-commerce platform with a strong focus on backend development, using technologies such as Bootstrap, Node.js, and MongoDB. 
            The main function is product and sales management. Work continues on implementing payment gateways and improving the user interface.
            </p>
            <a className="url" href="https://github.com/KaiserJagger/DSJ" target="_blank" rel="noopener noreferrer">View code</a>
          </div>
      </div>
    </div>

    <div className="flip-card" onClick={() => handleCardClick(1)}>
        <div className={`flip-card-inner${pressedCards[1] ? ' pressed' : ''}`}>
              <div class="flip-card-front">
                  <p class="title">JaggerStore</p>
                  <p className='description'>Computer Components</p>
                <img src="assets/Projects/jaggerstore.png" alt="" className="jg" />
              </div>
              <div class="flip-card-back">
              <p className='title-cards'>NodeJS- MongoDB - Bootstrap</p>
                <p class="text-card">
                In this project I present an e-commerce platform with a focus on backend development. 
                Users can register and buy products securely. The "premium" role stands out, allowing users to sell their products. 
                Work in progress includes adding payment gateways. This project reflects continuous improvement, balancing backend functionality with a user-friendly interface.
                </p>
                <a className="url" href="https://github.com/KaiserJagger/ProyectoFinalBackend" target="_blank" rel="noopener noreferrer"> View code</a>
              </div>
          </div>
      </div>
      </div>
      <div className="right-project">
      <div className="flip-card" onClick={() => handleCardClick(2)}>
        <div className={`flip-card-inner${pressedCards[2] ? ' pressed' : ''}`}>
                  <div class="flip-card-front">
                      <p class="title">AyR</p>
                      <p className='description'>Hardware and Software services</p>
                      <img src="assets/Projects/ayr.png" alt="" className="ayr" />
                  </div>
                  <div class="flip-card-back">
                    <p className='title-cards'>HTML - CSS - JavaScript - OS Specialist</p>
                    <p class="text-card">This was my first project focused on informing and promoting a comprehensive software and hardware technical service in the field of computing.
                    Although no longer in use, I emphasize the commitment to accurate diagnosis, efficient repairs, and personalized advice to keep technology in optimal condition</p>

                  </div>
              </div>
          </div>

          <div className="flip-card" onClick={() => handleCardClick(3)}>
        <div className={`flip-card-inner${pressedCards[3] ? ' pressed' : ''}`}>
                  <div class="flip-card-front">
                      <p class="title">API</p>
                      <p className='description'>Monetary conversions</p>
                      <img src="assets/Projects/project-3.png" alt="" className="api" />
                  </div>
                  <div class="flip-card-back">
                    <p className='title-cards'>NodeJS - Express - MongoDB</p>
                    <p className='text-card'>Designed to provide quick and accurate solutions in the financial world, 
                      our API allows for easy currency conversions, offering real-time updated data. 
                      We streamline integration with a user-friendly interface. 
                      While not yet implemented due to budget constraints, we are working to deliver this 
                      valuable tool shortly.</p>
                  </div>
              </div>
          </div>
        </div>
      <div className="right-project">
         <div className="flip-card" onClick={() => handleCardClick(4)}>
        <div className={`flip-card-inner${pressedCards[4] ? ' pressed' : ''}`}>
            <div class="flip-card-front">
                <p class="title">Created server Express</p>
                <p className='description'>Script</p>
            </div>
            <div class="flip-card-back">
                <p className='title-cards'>JavaScript</p>
                <p className='text-card'>This script, powered by Inquirer.js, offers an interactive CLI to configure server details, establish a comprehensive project structure, integrate middleware, and enable modular routing. Ideal for quick server setup, allowing developers to focus on building features.</p>
                <a className="url" href='https://github.com/KaiserJagger/CrearServidores' target="_blank" rel="noopener noreferrer">View code</a>
            </div>
        </div>
    </div>
    <div className="flip-card" onClick={() => handleCardClick(5)}>
        <div className={`flip-card-inner${pressedCards[5] ? ' pressed' : ''}`}>
            <div class="flip-card-front">
              <p class="title">JumpingMan</p>
              <p className='description'>Game</p>
              <img src="assets/Projects/jumping-man.png" alt="" className="jumping-man" />
            </div>
          <div class="flip-card-back">
            <p className='title-cards'>HTML - CSS - JavaScript</p>
            <p className='text-card'>This project was created with the goal of understanding the logic behind 
            the Google Dinosaur Game, focusing on improving the user interface.
                 Although we have achieved an attractive and fun experience. 
                 Each personal record and the possibility of competing with friends remain pending.
               </p>
              <a className="url" href='https://jumping-man.vercel.app/' target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
      </div>
  </div>
      </div>
    </section>
  );
};

export default LatestWorks;
