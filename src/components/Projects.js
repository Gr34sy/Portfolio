import React from "react";
import { ProjectCard } from "./ProjectCard";

import {
  musicMania,
  oddam,
  bestShop,
  countries,
  ToDo,
  passwordGenerator,
  devfinder,
  meteorWeather,
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
        img={meteorWeather}
        description="The app utilizes the OpenWeather API and displays weather stats in a nice visual form."
        project="MeteorWeather"
        href={"https://greasymeteorweather.netlify.app"}
        repo={"https://github.com/Gr34sy/meteor-weather"}
        stack={["NextJS", "TailwindCSS", "React", "MongoDB", "CSS", "HTML",]}
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
        img={passwordGenerator}
        description="Another FrontendMentor challenge. App with the functionalities to generate password. Users can set password length and which characters can be contained in the generated password."
        project={"Pasword Generator"}
        href={"https://grpasswordgenerator.netlify.app"}
        repo={
          "https://github.com/Gr34sy/frontendmentor-password-generator/tree/main"
        }
        stack={["React", "JavaScript", "HTML", "CSS"]}
      />

      <ProjectCard
        img={devfinder}
        description="The app enables to search for Github user and then display information about him. Users can also switch between dark and light mode."
        project={"Devfinder"}
        href={"https://greasydevfinder.netlify.app"}
        repo={"https://github.com/Gr34sy/frontendmentor-devfinder"}
        stack={["React", "TailwindCSS", "HTML", "CSS"]}
      />


      <ProjectCard
        img={countries}
        description="Web application created with Rest Countries API. You can search there info of all countries around the world! You can also turn on darkmode."
        project="Rest Countries"
        href={"https://guileless-semifreddo-6d7e9b.netlify.app"}
        repo={"https://github.com/Gr34sy/react-countries-api"}
        stack={["HTML", "Sass", "React", "Javascript"]}
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
