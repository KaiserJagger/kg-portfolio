import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './styles/Footer.css';
import './styles/GlobalStyles.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkgpppl");

  const handleFormSubmit = async (event) => {
    await handleSubmit(event);

    // Reset the form only if submission is successful
    if (state.succeeded) {
      // Set values of the form fields to an empty string
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }
  };

  return (
    <section id="footer">
      <form className='form' onSubmit={handleFormSubmit}>
        <h2 className='title-contact'> Contact me</h2>
        <h3>Let's make something amazing!</h3>
        <label className="email" htmlFor="email">
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder='Email Address'
        />
        <ValidationError 
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder='Message'
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className='btn-form' type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

      {state.succeeded && (
        <p className='success-text'>Thanks for reaching out! I'll get back to you soon.</p>
      )}
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;
