import React from 'react';
import { ProjectCard } from './ProjectCard';

import musicMania from '../assets/MusicMania.png';
import oddam from '../assets/oddamwdobrerece.png';
import spotifyClone from '../assets/SpotifyClone.png';

export function Projects(){
    return(
        <section className='d-flex flex-wrap align-items-start justify-content-center p-1 p-sm-5 projects' id="projects">
            <h2 className='w-100 pt-5 text-center'>My projects</h2>
            <ProjectCard 
            img = {musicMania}
            description="Page which connects with last.fm API. It enables to filter artists, add them to favorites and search for similar. Page itself takes a bit to load but give it time.
" 
            project='Music Mania'
            href={"https://mellifluous-faun-63ea4b.netlify.app"}
            repo={"https://github.com/Gr34sy/MusicManiaProject"}
            stack={['html', 'sass', 'java script', 'react']}
            />

            <ProjectCard 
            img = {oddam}
            description="This site imitates charity collections. Page also uses firebase authorization and firestorage to upload data sent by form." 
            project='Oddam w dobre ręce'
            href={"https://sparkly-licorice-0bee9d.netlify.app"}
            repo={"https://github.com/Gr34sy/oddamwdobrerece"}
            stack={['html','sass','javascript', 'react', 'firebase']}
            />

            <ProjectCard 
            img = {spotifyClone}
            description="Just a simple Spotify clone made with React, Bootstrap and Spotify API." 
            project='Spotify Clone'
            repo={"https://github.com/Gr34sy/SpotifyClone"}
            stack={['HTML', 'Bootstrap', 'React']}
            />

            {/* <ProjectCard 
            description="Some quick example text to build on the card title and make up the
            bulk of the card's content." 
            project={null}
            href={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            repo={"https://www.w3schools.com/bootstrap4/bootstrap_containers.asp"}
            stack={[]}
            /> */}

        </section>
    )
}