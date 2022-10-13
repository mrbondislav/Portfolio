import React from 'react';
import './portfolio.css';
import PRTF1 from '../../assets/Portfolio1.webp';
import PRTF2 from '../../assets/Portfolio2.webp';
import PRTF3 from '../../assets/Portfolio3.webp';
import PRTF4 from '../../assets/Portfolio4.webp';



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portrolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={PRTF1} alt="PortfolioImg" />
                    </div>
                    <h3>React Pizza</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/mrbondislav/react-pizaa" className='btn' target='_blank'>Github</a>
                        <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={PRTF2} alt="PortfolioImg" />
                    </div>
                    <h3>Blog</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/mrbondislav/Articles" className='btn' target='_blank'>Github</a>
                        <a href="https://fedoseevs-pizza.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={PRTF3} alt="PortfolioImg" />
                    </div>
                    <h3>Online Chat</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/mrbondislav/RealTime-Chat" className='btn' target='_blank'>Github</a>
                        <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={PRTF4} alt="PortfolioImg" />
                    </div>
                    <h3>Online Chat V2</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/mrbondislav/RealTime-Chat-V2-frontend" className='btn' target='_blank'>Github</a>
                        <a href="https://online-chat-v2.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;