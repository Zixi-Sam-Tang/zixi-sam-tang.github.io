import React from "react";
import { Project } from "./Project";
import "./Projects.css";
import Details from "../assets/Project_Details.json";

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="section-kicker">Selected Work</span>
        <h2 className="projs-title">Projects</h2>
      </div>
      <div className="proj-grid">
        {Details && Details.map((projectDetail) => (
          <Project
            title={projectDetail.title}
            img={projectDetail.img}
            description={projectDetail.description}
            stack={projectDetail.stack}
            github={projectDetail.github}
            demo={projectDetail.demo}
            hidden={projectDetail.isHidden}
            key={projectDetail.id}
          />
        ))}
      </div>
    </section>
  );
}
