import React from "react";


export function SkillBox({src, alt}){
    return(
        <div className="d-flex justify-content-between align-items-center skillbox">
            <img alt={alt} width="50px" src={src} />
            <h3 className="skill__description">asdads</h3>
        </div>
    )
}
