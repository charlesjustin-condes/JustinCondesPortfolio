import React from 'react';
import './Nav.css';
import {GrHomeRounded} from 'react-icons/gr';
import {GrUser} from 'react-icons/gr';
import {GrBook} from 'react-icons/gr';
import {GrPersonalComputer} from 'react-icons/gr';
import {GrPhone} from 'react-icons/gr';
import {GrCode} from 'react-icons/gr';

import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GrHomeRounded className='nav__icon'/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GrUser className='nav__icon'/></a>
      <a href='#experience'  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GrBook className='nav__icon'/></a>
      <a href='#services'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GrCode className='nav__icon'/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrPersonalComputer className='nav__icon'/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrPhone className='nav__icon'/></a>
    </nav>
  )
}

export default Nav;