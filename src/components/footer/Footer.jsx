import React from 'react';
import './Footer.css';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Justin</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/chillingzzzz/" target="_blank"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/_chillingzzzz/" target="_blank"><FaInstagram/></a>
        <a href="https://twitter.com/chillingzzzz" target="_blank"><FaTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Justin Condes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;