import React from "react";

//violet rgb(44, 44, 44)
//dark-grey rgb(80, 80, 80)

export function SkillBox({src, alt}){
    return(
        <div className="d-flex justify-content-between" style={{width: '10%' }}>
            <img alt={alt} width="50px" src={src} />
            <h3 className="skill__description">asdads</h3>
        </div>
    )
}
