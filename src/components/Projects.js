import React from "react";
import { ProjectCard } from "./ProjectCard";

import {
  musicMania,
  oddam,
  bestShop,
  countries,
  Covid,
  ToDo,
} from "./imageImports";

export function Projects() {
  return (
    <section
      className="d-flex flex-wrap align-items-start justify-content-center p-1 p-sm-5 projects"
      id="projects"
    >
      <h2 className="w-100 pt-5 text-center">My projects</h2>
      <ProjectCard
        img={ToDo}
        description="My most advanced project for now. ToDo list made with NextJS and MongoDB."
        project="ToDo App"
        href={"https://grtodoapp.netlify.app"}
        repo={"https://github.com/Gr34sy/next-todo-app"}
        stack={["HTML", "SASS", "React", "NextJS", "MongoDB"]}
      />

      <ProjectCard
        img={musicMania}
        description="Page which connects with last.fm API. It enables filtering music artists, adding them to favorites and searching for the similar.Site takes a bit to load but give it time please."
        project="Music Mania"
        href={"https://mellifluous-faun-63ea4b.netlify.app"}
        repo={"https://github.com/Gr34sy/MusicManiaProject"}
        stack={["html", "sass", "java script", "react"]}
      />

      <ProjectCard
        img={countries}
        description="Web application created with Rest Countries API. You can search there info of all countries around the world! You can also turn on darkmode."
        project="Rest Countries"
        href={"https://guileless-semifreddo-6d7e9b.netlify.app"}
        repo={"https://github.com/Gr34sy/react-countries-api"}
        stack={["HTML", "Sass", "React", , "javascript"]}
      />

      <ProjectCard
        img={Covid}
        description="Page is showing covid statistics either global or for single country. You can sort and filter country tiles."
        project="Covid Stats"
        href={"https://soft-tanuki-d1371e.netlify.app"}
        repo={"https://github.com/Gr34sy/covid-stats-app"}
        stack={["HTML", "CSS", "JavaScript", "React"]}
      />

      <ProjectCard
        img={bestShop}
        description="My first RWD project. I also used there vanilla JavaScript and SASS. Site contains simple calculator."
        project="Best Shop"
        href={"https://inspiring-sorbet-4f9b9d.netlify.app"}
        repo={"https://github.com/Gr34sy/BestShop-project"}
        stack={["HTML", "sass", "javascript"]}
      />

      <ProjectCard
        img={oddam}
        description="This site imitates charity collections. Page also uses firebase authorization and firestorage to upload data sent by form."
        project="Oddam w dobre ręce"
        href={"https://sparkly-licorice-0bee9d.netlify.app"}
        repo={"https://github.com/Gr34sy/oddamwdobrerece"}
        stack={["html", "sass", "javascript", "react", "firebase"]}
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
  );
}
