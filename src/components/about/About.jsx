import React from 'react';
import './about.css';
import AboutMe from '../../assets/About-Me.jpg';
import { FaAward } from 'react-icons/fa';
import { TbUsers } from 'react-icons/tb';
import { VscFolderActive } from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="about Me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Lorem ipsum</small>
                        </article>
                        <article className='about__card'>
                            <TbUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Lorem ipsum</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderActive className='about__icon' />
                            <h5>Projects</h5>
                            <small>5 Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, alias. Possimus dolores voluptatibus illum iusto magnam adipisci pariatur suscipit voluptatem dicta? Praesentium exercitationem ab enim libero, similique qui necessitatibus corporis.</p>

                    <a href="#contact" className='btn btn-primary' >Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About;