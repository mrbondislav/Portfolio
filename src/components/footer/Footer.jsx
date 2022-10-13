import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>MRBONDISLAV</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>

            <div className="footer__copyright">
                <small>&copy; Lorem ipsum dolor sit amet 2022</small>
            </div>
        </footer>
    )
}

export default Footer;