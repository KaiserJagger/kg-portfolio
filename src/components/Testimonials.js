import {React, useEffect} from 'react';
import './styles/Testimonials.css';
import './styles/GlobalStyles.css';

 
const Testimonials = () => {
  useEffect(() => {
    const singleProfileCard = document.querySelectorAll('.single-profile-card');
    const testimonialCard = document.querySelectorAll('.testimonial-card');

    singleProfileCard.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        testimonialCard.forEach((testimonialCard, testimonialCardIndex) => {
          if (index === testimonialCardIndex) {
            testimonialCard.style.display = 'block';
          } else {
            testimonialCard.style.display = 'none';
          }
        });
        singleProfileCard.forEach((cardBtn, cardIndex) => {
          if (index === cardIndex) {
            cardBtn.classList.add('profile-card-active');
          } else {
            cardBtn.classList.remove('profile-card-active');
          }
        });
      });
    });
  }, []);
  
  return (
    <section id="testimonial">
      <div className="testimonial-title">
        <h2>Testimonials</h2>
        <p>What's client say about me</p>
      </div>
      <div className="testimonial-card">
        <div className="star-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>5.0 Rating</p>
        </div>
        <h4>Tanmoy was a real pleasure to work with and we look forward to working with him again. He's definitely
          the kind designer you can trust with a project from start to finish</h4>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <div className="testimonial-card" style={{ display: 'none' }}>
        <div className="star-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>4.5 Rating</p>
        </div>
        <h4>Working with Tanmoy was a pleasure. Their expertise in both design
          and development allowed them to create a website that exceeded our expectations. We couldn't be happier
          with the end result.</h4>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <div className="testimonial-card" style={{ display: 'none' }}>
        <div className="star-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>4.0 Rating</p>
        </div>
        <h4>I highly recommend Tanmoy for any design or development project.
          They have the skills, experience, and passion to create stunning, functional solutions that will take
          your business to the next level.</h4>
        <i className="fa-solid fa-quote-right"></i>
      </div>
      <div className="client-profile-card">
        <div className="single-profile-card profile-card-active">
          <img src="assets/client-profile.png" alt="" />
          <div>
            <h4>Tanmoy Saha</h4>
            <p>VP & Co-Founder, <a href=" ">Wiser</a></p>
          </div>
        </div>
        <div className="single-profile-card">
          <img src="assets/client-profile.png" alt=" " />
          <div>
            <h4>Tanmoy Saha</h4>
            <p>VP & Co-Founder, <a href=" ">Wiser</a></p>
          </div>
        </div>
        <div className="single-profile-card">
          <img src="assets/client-profile.png" alt="" />
          <div>
            <h4>Tanmoy Saha</h4>
            <p>VP & Co-Founder, <a href=" ">Wiser</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
