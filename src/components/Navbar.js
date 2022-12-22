import React from 'react';

export function Navbar(){
    return(
        <nav className='nav'>
            <div className='p-0 my-0 mx-auto d-flex align-items-center justify-content-center text-align-center listsbox'>

                <ul className='p-0 m-0 align-items-center justify-content-end text-align-center navlist flex-wrap'>
                    <li>
                        <a className='text-decoration-none p-2' href="#home">Home</a>
                    </li>
                    
                    <li>
                        <a className='text-decoration-none p-2' href="#skills">Skills</a>
                    </li>
                </ul>
                
                <a className='text-decoration-none pt-4 px-4 align-self-end' href="#home" width="10%"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="80px" alt="greasy logo" /></a>
                
                <ul className='p-0 m-0 align-items-center justify-content-start text-align-center navlist flex-wrap'>
                    <li>
                        <a className='text-decoration-none p-2' href="#projects">Projects</a>
                    </li>
                    
                    <li>
                        <a className='text-decoration-none p-2' href="#projects">Projects</a>
                    </li>
                </ul>
            </div>

            <ul className="m-0 p-4 text-center navlist navlist--mobile">
                <li>
                    <a className='text-decoration-none p-2' href="#home">Home</a>
                </li>
                    
                <li>
                    <a className='text-decoration-none p-2' href="#skills">Skills</a>
                </li>

                <li>
                    <a className='text-decoration-none p-2' href="#projects">Projects</a>
                </li>
                    
                <li>
                    <a className='text-decoration-none p-2' href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}