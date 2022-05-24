import React, { useEffect } from 'react';
import './Experience.css';
import {BsCheckSquareFill} from 'react-icons/bs';
import Aos from "aos";
import "aos/dist/aos.css";

const Experience = () => {
useEffect(() => {
    Aos.init({ duration:2000 });
  }, []);
  return (
    <section id='experience'>
      <h5> </h5>
      <h2>Educational Background and Previous Works</h2>

      <div className="container experience__container">
        <div data-aos="fade-up-right" className="experience__frontend">
          <h3>Previous Education</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
              <h4>• University of Santo Tomas</h4>
              <small className='text-light'>Bachelor of Science in Information Technology major in Web and Mobile Application Development
              <br/> August 2018 - May 2022
              </small><br/>
              <small>Consistent Dean's Lister</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <h4>• University of Perpetual Help Rizal - Molino Campus</h4>
              <small className='text-light'>Science, Technology, Engineering and Mathematics
              <br/> 2016-2018
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <h4>• Bacoor National Highschool - Molino Campus</h4>
              <br/><small className='text-light'>2012 - 2016</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <h4>• Ligas 1 Elementary School</h4>
              <br/><small className='text-light'>2006-2012</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div data-aos="fade-up-left"  className="experience__backend">
        <h3>Work Experience</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <div>
              <h4>• Quality Assurance Intern</h4>
              <small className='text-light'>Signet Properties | January 2022 - May 2022</small>
              </div>
            </article>
            <article className='experience__details'>
              <div>
              <h4>• Production Group Trainee</h4>
              <small className='text-light'>Creotec Philippines, Inc. | Dec 2017 - Dec 2017</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;