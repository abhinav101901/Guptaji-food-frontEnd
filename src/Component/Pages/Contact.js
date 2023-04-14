import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../Assets/contact.avif'
import '../styles/Contact.css'
function Contact() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_svha3q3', 'template_17vizmr', form.current, 'lL9MgfFiaKITbBGf7')
      .then((result) => {
          console.log(result.text);
          alert("Contact send Successful !!!!")
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='Contect-box'>
      <div className='cont-img'>
        <img src={contact} alt='Contact'/>
      </div>
      <form className='cont' ref={form} onSubmit={sendEmail}>
        <d2>Contact</d2>
        <input className="In-1" type="text" name="user_name" required placeholder='You good name'/>
        <input className="In-1" type="text" name="user_email" required placeholder='Email' />  
        <textarea className="In-1" rows="5" cols="10" name="Your_massage" form="usrform" placeholder='Enter text here...'></textarea>
        <input className="btn-1" type="submit" value="Submit"/>
      </form>
    </div>
    
  )
}

export default Contact
