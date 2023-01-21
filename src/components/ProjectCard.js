import React from 'react';
import { Card } from 'react-bootstrap';

export function ProjectCard({img, description, project, href, repo, stack}){
    
   return(
    <Card className="project-card">
        <Card.Img src={img}/>
        <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
            <Card.Title style={{letterSpacing: '3px'}}>
                {project}
            </Card.Title> 


            <div className='my-2 project__stack'>
                Stack: {stack.map(
                    (item, index) => {
                        return (<span key={index} className=" mx-1 p-1">{item}</span>)
                    }
                )}
            </div>
            <Card.Text style={{fontWeight: '100'}}>
            {description}
            </Card.Text>
            
            
            <div>
                {href && <a href={href} className="custom-button" target="_blank">
                Preview</a>} 

                {repo && <a href={repo} className={ repo && href ? "mx-3  custom-button" : "custom-button"} target="_blank">
                Repo</a>}
            </div>
        </Card.Body>
    </Card>
   )
}