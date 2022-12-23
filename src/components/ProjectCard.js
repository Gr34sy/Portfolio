import React from 'react';
import { Card } from 'react-bootstrap';

import placeholder from '../assets/placeholder.jpg';

export function ProjectCard({description, site, href, repo}){
    
   return(
    <Card style={{width: '450px', margin: '20px', border: 'none', boxShadow: `0 0 20px #3b2668`}}>
        <Card.Img src={placeholder}/>

        <Card.Body>
            <Card.Title>
                Card Title
            </Card.Title>

            <Card.Text>
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