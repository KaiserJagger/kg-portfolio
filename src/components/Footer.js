import React, {useState} from 'react';
import axios from 'axios'
import './styles/Footer.css';
import './styles/GlobalStyles.css';

const Footer = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [sentSucces, setSendSucces] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Realiza una solicitud HTTP para enviar los datos del formulario al servidor
      await axios.post('http://localhost:3001/form', form);
      setSendSucces(true);
      console.log('Formulario enviado con éxito');
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.error('Error al enviar el formulario', error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error('Error al enviar el formulario, no se recibió respuesta del servidor');
      } else {
        // Algo sucedió en la configuración de la solicitud que desencadenó un error
        console.error('Error al enviar el formulario', error.message);
      }
    }
  };
  
      return (
        <section id="footer">
          <form className='form' onSubmit={handleSubmit}>
          <h2 className='title-contact'> Contact me</h2>
          <h3>Let's make something amazing!</h3>
      <label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Name' />
      </label>
      <label >
        <input  type="email" name="email" value={form.email} onChange={handleChange} placeholder='Email' />
      </label>
      <label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder='Message' />
      </label>
      <button className='btn-form' type="submit">Submit</button>
    {sentSucces && <p>Submitted successfully!</p>}
    </form>
        </section>
  );

}

export default Footer;
