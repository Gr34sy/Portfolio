import React from 'react';
import { ProjectCard } from './ProjectCard';

import musicMania from '../assets/MusicMania.png';
import oddam from '../assets/oddamwdobrerece.png';
import spotifyClone from '../assets/SpotifyClone.png';
import bestShop from '../assets/bestShop.png';

export function Projects(){
    return(
        <section className='d-flex flex-wrap align-items-start justify-content-center p-1 p-sm-5 projects' id="projects">
            <h2 className='w-100 pt-5 text-center'>My projects</h2>
            <ProjectCard 
            img = {bestShop}
            description="My first RWD project. I also used there vanilla JavaScript and SASS. Site contains simple calculator." 
            project='Best Shop Landing Page'
            href={"https://inspiring-sorbet-4f9b9d.netlify.app"}
            repo={"https://github.com/Gr34sy/BestShop-project"}
            stack={['HTML', 'sass', 'javascript']}
            />

            <ProjectCard 
            img = {musicMania}
            description="Page which connects with last.fm API. It enables filtering music artists, adding them to favorites and searching for the similar.Site takes a bit to load but give it time please."
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
            img = {}
            description="" 
            project={''}
            href={""}
            repo={""}
            stack={[]}
            /> */}

        </section>
    )
}