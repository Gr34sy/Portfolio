import React from "react";
import { SkillBox } from "./SkillBox";

import separatorSkillsBottom from '../assets/separatorSkillsBottom.png';
import separatorSkillsTop from '../assets/separatorSkillsTop.png';


export function SectionSkills(){
    return(
        <>
        <figure className='m-0 p-0'>
            <img src={separatorSkillsTop} alt="decoration" className='w-100'/>
        </figure>

        <section className="py-3  py-sm-5 section-skills" id="skills">
            <h2 className="text-center w-100 m-0 mb-2">I have Experience With</h2>
            <div className="d-flex flex-wrap flex-column skillboxes px-3">

                {/* <h3 className="text-left mt-2 mt-sm-5 skill__type">
                    Currently Learning
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" skill="TypeScript" />
                </div> */}


                <h3 className="text-left mt-5 skill__type">
                    Front-end
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" skill="NextJS"/>
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" skill="React" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" skill="SASS" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" skill="HTML" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" skill="CSS" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" skill="JavaScript" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" skill="TailwindCSS"/>
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" skill="Bootstrap" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" skill="Material-UI"/>
                </div>

                <h3 className="text-left mt-5 skill__type">
                    Back-end
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" skill="NodeJS" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" skill="Express" />
                </div>

                <h3 className="text-left mt-5 skill__type">
                    Databases
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" skill="MongoDB" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" skill="Firebase" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" skill="MySQL" />
                </div>

                <h3 className="text-left mt-5 skill__type">
                    Other Languages
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" skill="Python" />
                </div>

                <h3 className="text-left mt-5 skill__type">
                    IDE
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" skill="Visual Studio Code" />
                </div>

                <h3 className="text-left mt-5 skill__type">
                    Version Control
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" skill="Git"/>
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" skill="GitHub" />
                </div>

                <h3 className="text-left mt-5 skill__type">
                    Web Design
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" skill="Figma" />
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" skill="Adobe XD" />
                </div>

                <h3 className="text-left mt-5 skill__type">
                    Operating Systems
                </h3>
                <div className="d-flex flex-wrap justify-content-start text-center w-100">
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" skill="macOS"/>
                    <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" skill="Windows" />
                </div>
            
            </div>
        </section>

        <figure className='m-0 p-0'>
            <img src={separatorSkillsBottom} alt="decoration" className='w-100'/>
        </figure>
        </>
    )
}