import React from 'react';
import separatorBottom from '../assets/separatorBottom.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons';
import {faCode} from '@fortawesome/free-solid-svg-icons';

export function Contact(){
    return(
        <>
        <figure className='m-0 p-0'>
            <img src={separatorBottom} alt="decoration" className='w-100'/>
        </figure>

        <footer className=' contact' id="contact">
            <h2 className='pt-0 pb-3 px-5 m-0'>Contact</h2>
            <a className="d-block text-decoration-none py-2 px-5 text-hover-gradient" href="mailto:slupek3@poczta.fm">
                <span><FontAwesomeIcon icon={faEnvelope} className="text-hover-gradient" /></span>
                Email
            </a>

            <a className="d-block text-decoration-none py-2 px-5 text-hover-gradient" href="https://www.linkedin.com/in/piotr-słupski-75821625b/">
                <span><FontAwesomeIcon icon={faLinkedin} /></span>
                LinkedIn
            </a>

            <a className="d-block text-decoration-none py-2 px-5 text-hover-gradient" href="https://github.com/Gr34sy">
                <span><FontAwesomeIcon icon={faGithub} /></span>
                Github
            </a>

            <a className="d-block text-decoration-none py-2 px-5 text-hover-gradient" href="https://www.codewars.com/users/Gr34sy">
                <span><FontAwesomeIcon icon={faCode} /></span>
                Codewars
            </a>

            <a className="d-block text-decoration-none pt-2 pb-3 px-5 text-hover-gradient" href="">
                <span><FontAwesomeIcon icon={faPaperclip} /></span>
                CV
            </a>
        </footer>
        </>
    )
}