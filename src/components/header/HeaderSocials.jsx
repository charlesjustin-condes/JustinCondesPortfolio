import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/charlesjustincondes/" target="__blank"><FaLinkedin/></a>
        <a href="https://github.com" target="__blank"><FaGithubSquare/></a>
        <a href="https://www.facebook.com/chillingzzzz/" target="__blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocials