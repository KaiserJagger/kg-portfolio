import React from 'react';
import Menu from './components/Menu.js';
import Introduction from './components/Introduction.js';
import Works from './components/Works.js'
import SectionBody from './components/SectionBody.js';
import ContactForm from './components/Footer.js';

function App() {

  return (
    <div className="header" >
      <Menu />
        <SectionBody  />
        <Introduction />
        <Works />
      <ContactForm />
    </div>
  );
}

export default App;
