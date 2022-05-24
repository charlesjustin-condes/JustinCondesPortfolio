import React, { useEffect } from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {FiPhoneCall} from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration:1000 });
  }, []);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_me5b50g', 'template_k1sdolu', form.current, 'lWUMx6itHuC0HPOVr')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div data-aos="fade-down-right" className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>charlesjustin.condes@gmail.com</h5>
            <a href="mailto:charlesjustin.condes@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>chillingzzzz</h5>
            <a href="https://m.me/chillingzzzz" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FiPhoneCall className='contact__option-icon'/>
            <h4>Mobile Phone</h4>
            <h6>09123456789</h6>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <div data-aos="fade-down-left">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;