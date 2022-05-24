import React, { useEffect } from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import {FaUserGraduate} from 'react-icons/fa';
import {GiMagnifyingGlass} from 'react-icons/gi';
import {AiTwotoneFolderOpen} from 'react-icons/ai';
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration:2000 });
  }, []);
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div data-aos="fade-right" className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div data-aos="fade-left" className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/><br/>
              <a href='#experience'>Education and Experience</a>
            </article>
            <article className='about__card'>
              <GiMagnifyingGlass className='about__icon'/><br/>
              <a href='#services'>Skills</a>
            </article>
            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon'/><br/>
              <a href='#portfolio'>Portfolio</a>
            </article>
          </div>

          <p>
          A personable and highly motivated Bachelor of Science in Information Technology Major in Web and Mobile Application Development student.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About