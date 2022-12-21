import React from "react";


export function SkillBox({src, skill}){
    return(
        <div className="d-flex justify-content-start align-items-center skillbox">
            <img alt={skill} width="50px" src={src} />
            <h3 className="skill__description">{skill}</h3>
        </div>
    )
}
