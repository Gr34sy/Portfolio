import React from 'react';
import { ProjectCard } from './ProjectCard';

import {musicMania, oddam, spotifyClone, bestShop, GPT3, countries } from './imageImports';

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

            <ProjectCard 
            img = {GPT3}
            description="Simple responsive landing page  with modern design, built with React." 
            project='GPT3 Landing Page'
            href={"https://verdant-taffy-1fdc0c.netlify.app"}
            repo={"https://github.com/Gr34sy/gpt3_jsm"}
            stack={['HTML', 'CSS', 'React']}
            />

            <ProjectCard 
            img = {countries}
            description="Web application created with Rest Countries API. You can search there info of all countries around the world! You can also turn on darkmode." 
            project='Rest Countries'
            href={"https://guileless-semifreddo-6d7e9b.netlify.app"}
            repo={"https://github.com/Gr34sy/react-countries-api"}
            stack={['HTML', 'Sass', 'React', ,'javascript']}
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