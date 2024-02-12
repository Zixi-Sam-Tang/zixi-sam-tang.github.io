import React from "react";
import { Project } from "./Project";
import "./Projects.css"
import Details from "../assets/Project_Details.json";

export function Projects() {
  return <div id="projects">
    <span className="projs-title">Projects</span>
    <div className="proj-grid">
      {
        Details && Details.map(projectDetail =>
          <Project
            title={projectDetail.title}
            img={projectDetail.img}
            description={projectDetail.description}
            stack={projectDetail.stack}
            github={projectDetail.github}
            demo={projectDetail.demo}
            hidden={projectDetail.isHidden}
            key={projectDetail.id}/>
        )
      }
    </div>
  </div>;
};
