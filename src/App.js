import React from 'react';
import Menu from './components/Menu.js';
import Introduction from './components/Introduction.js';
import Works from './components/Works.js'
import SectionBody from './components/SectionBody.js';
// import Contributions from './components/Contributions.js';
import ContactForm from './components/Footer.js';


function App() {

  return (
    <div className="header" >
      <Menu />
        <SectionBody  />
        <Introduction />
        <Works />
        {/* <Contributions /> */}
      <ContactForm />
    </div>
  );
}

export default App;
