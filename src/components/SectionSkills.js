import React from "react";
import { SkillBox } from "./SkillBox";


export function SectionSkills(){
    return(
        <section className="section-skills" id="skills">
            <div className="d-flex flex-wrap justify-content-center px-5 text-center skillboxes">
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" skill="Bootstrap" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" skill="React" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" skill="CSS" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" skill="HTML" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" skill="Visual Studio Code" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" skill="SASS" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" skill="Material-UI"/>

                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" skill="mySQL" />

                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" skill="Firebase" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" skill="PHP" />

                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" skill="Git"/>
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" skill="GitHub" />

                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" skill="macOS"/>
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" skill="Windows" />

                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" skill="Figma" />
                <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" skill="Adobe XD" />
            </div>
        </section>
    )
}