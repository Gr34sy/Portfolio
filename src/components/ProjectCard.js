import React from 'react';
import { Card, Button } from 'react-bootstrap';

export function ProjectCard({description, site, link}){
   return(
    <Card style={{width: '400px', margin: '20px auto'}}>
        <Card.Img>

        </Card.Img>

        <Card.Body>
            <Card.Title>
                Card Title
            </Card.Title>

            <Card.Text>
            {description}
            </Card.Text>

            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
   )
}