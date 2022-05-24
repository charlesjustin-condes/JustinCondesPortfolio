import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import Aos from "aos";
import "aos/dist/aos.css";



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Capstone Project Directory System for UST IT Department',
    position: 'Project Manager, UI/UX Designer, Developer',
    description: 'Online Repository, Panel Review, and Automatic distribution of Intellectual Property Registry Number for UST IT Department using PHP and MYSQL',
    link: 'https://drive.google.com/drive/folders/1_GGBsM619PwFxrvYATl404XZwj6sldZy?usp=sharing'
  },
  {
    id:2,
    image: IMG2,
    title: 'CMS and eCommerce Website for GoodRides for GoodGuys',
    position: 'Project Manager',
    description: 'Content Management System and eCommerce Website for GoodRides by GoodGuys using ReactJS and MongoDB',
    link: 'https://drive.google.com/drive/folders/1vC5GfYPD8WcGkVngFssq2E3j5NftY8za?usp=sharing'
  }, 
  {
    id:3,
    image: IMG3,
    title: 'PUPQuiz - Mobile Application',
    position: 'Project Manager, UI/UX Designer, Quality Assurance',
    description: 'Mobile Quiz App for different breed of dogs using Java',
    link: 'https://drive.google.com/drive/folders/1oBdApVnQD7FnvVI_boPudxV7g89DI0w6?usp=sharing'
  }, 
  {
    id:4,
    image: IMG4,
    title: 'Pharmacy Inventory System',
    position: 'Project Manager, Front End Developer, Back End Developer',
    description: 'Inventory System for Pharmacies using PHP and MYSQL',
    link: 'https://drive.google.com/drive/folders/1Om2xhFHmo1P4oeSt-jQOGYcvzciGxPlE?usp=sharing'
  }, 
  {
    id:5,
    image: IMG5,
    title: 'UST Mountaineering Club Web Page',
    position: 'Front End Developer, Back End Developer',
    description: 'Web page for UST Mountaineering Club using HTML and CSS',
    link: 'https://drive.google.com/drive/folders/11nGyXvDH54QOBgUkkuscLInEMbxrbADL?usp=sharing'
  }, 
  {
    id:6,
    image: IMG6,
    title: 'Hangman Game',
    position: 'Developer',
    description: 'Simple Hangman Game using ReactJS',
    link: 'https://drive.google.com/drive/folders/1s4HJCB01CIeFfuG_ByJIYGXrkpDKwI7e?usp=sharing'
  }, 
]



const Portfolio = () => {
useEffect(() => {
    Aos.init({ duration:1000 });
  }, []);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div data-aos="zoom-in" className="container portfolio__container">
        {
          data.map(({id, image, title, position, description, link}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <small className='text-light'><center>Position: {position}</center></small><br/>
          <small className='text-light'><center>Description: {description}</center></small><br/>
          <div className='portfolio__item-cta'>
          <a href={link} className='btn btn-primary-document' target='_blank'>Documents</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio