import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import Typical from 'react-typical';

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Justin Condes</h1>
            <Typical steps={['Fullstack Developer 💻', 1000, 'Project Manager 📌', 1000, 'Quality Assurance 🔎', 1000]}loop={Infinity}wrapper="p"/><br/>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header;