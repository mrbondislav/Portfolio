import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaPhabricator } from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/" target="_blank" ><AiFillGithub /></a>
            <a href="https://career.habr.com/" target="_blank" ><FaPhabricator /></a>
        </div>
    )
}

export default HeaderSocials;