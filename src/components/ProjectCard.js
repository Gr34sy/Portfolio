import React from 'react';
import { Card } from 'react-bootstrap';

import placeholder from '../assets/placeholder.jpg';

export function ProjectCard({description, project, href, repo, stack}){
    
   return(
    <Card style={{width: '450px', margin: '20px', border: 'none', boxShadow: `0 0 20px #3b2668`}}>
        <Card.Img src={placeholder}/>

        <Card.Body>
            <Card.Title style={{letterSpacing: '3px'}}>
                Card Title
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

            <a href={href} className="custom-button" target="_blank">
                Preview
            </a>

            <a href={repo} className="mx-3 custom-button" target="_blank">
                Repo
            </a>
        </Card.Body>
    </Card>
   )
}