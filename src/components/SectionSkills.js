import React from "react";
import { SkillBox } from "./SkillBox";


export function SectionSkills(){
    return(
        <section className="d-flex flex-wrap justify-content-center align-items-center section-skills">
            <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
        </section>
    )
}