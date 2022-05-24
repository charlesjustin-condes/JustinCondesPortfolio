import React, { useEffect } from 'react';
import './Services.css';
import {AiOutlineCheck} from 'react-icons/ai';
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        Aos.init({ duration:1000 });
      }, []);
  return (
    <section id='services'>
        <h5>What skills do I have</h5>
        <h2>Skills</h2>

        <div className="container services__container">
            <article data-aos="fade-right" className='service'>
                <div className="service__head">
                    <h3>Front End</h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>HTML</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>CSS</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>Javascript</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>React</p>
                    </li>
                </ul>
            </article>
            {/* END OF UI/UX */}
            <div data-aos="flip-left">
            <article className='service'>
                <div className="service__head">
                    <h3>Back End</h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>PHP</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>Phyton</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>JAVA</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>SQL</p>
                    </li>
                </ul>
            </article>
            </div>

            <div data-aos="fade-left">
            <article className='service'>
                <div  className="service__head">
                    <h3>Other Skills</h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>Project Management</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>Quality Assurance</p>
                    </li>
                    <li>
                    <AiOutlineCheck className='service__list-icon'/>
                    <p>Technical/Software Documentation</p>
                    </li>
                </ul>
            </article>
            </div>
        </div>
    </section>
  )
}

export default Services;