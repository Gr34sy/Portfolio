import React from 'react';
import { ProjectCard } from './ProjectCard';

export function Projects(){
    return(
        <section className='d-flex flex-wrap align-items-start justify-content-center p-1 p-sm-5 projects' id="projects">
            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            project={null}
            href={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            repo={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            stack={['html','java script']}
            />

            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            project={null}
            href={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            repo={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            stack={[]}
            />

            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            project={null}
            href={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            repo={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            stack={[]}
            />

            <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            project={null}
            href={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            repo={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            stack={[]}
            />

        </section>
    )
}