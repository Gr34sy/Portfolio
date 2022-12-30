import React from 'react';
import { Card } from 'react-bootstrap';

export function ProjectCard({img, description, project, href, repo, stack}){
    
   return(
    <Card style={{width: '450px', height:'480px', margin: '20px', border: 'none', boxShadow: `0 0 20px #3b2668`}}>
        <Card.Img src={img}/>
        <Card.Body>
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

            {href && <a href={href} className="custom-button" target="_blank">
                Preview
            </a>}

            {repo && <a href={repo} className={ repo && href ? "mx-3 custom-button" : "custom-button"} target="_blank">
                Repo
            </a>}
        </Card.Body>
    </Card>
   )
}