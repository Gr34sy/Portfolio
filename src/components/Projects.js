import React from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects(){
    return(
        <section className='d-flex flex-wrap align-items-start justify-content-between p-5 projects' id="projects">
            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            site={null}
            link={null}
            />

            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            site={null}
            link={null}
            />

            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            site={null}
            link={null}
            />

            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            site={null}
            link={null}
            />

        </section>
    )
}