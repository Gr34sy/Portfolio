import React from "react";
import { SkillBox } from "./SkillBox";

//violet rgb(44, 44, 44)
//dark-grey rgb(80, 80, 80)

export function SectionSkills(){
    return(
        <div className="d-flex flex-wrap justify-content-center" style={{width: '100%' ,backgroundColor: 'rgb(44, 44, 44)'}}>
            <SkillBox src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
        </div>
    )
}