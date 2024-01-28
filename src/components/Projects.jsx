import React from "react";
import { Project } from "./Project";
import "./Projects.css"
import { getDetails } from "./ProjectDetails";

export function Projects() {
  var projCtnt = getDetails();

  return <div id="projects">
    <span className="projs-title">Projects</span>
    <div className="proj-grid">
      {
        projCtnt.map((row, i) =>
          <Project
            title={projCtnt[i][0]}
            img={projCtnt[i][1]}
            description={projCtnt[i][2]}
            stack={projCtnt[i][3]}
            github={projCtnt[i][4]}
            demo={projCtnt[i][5]}
            hidden={projCtnt[i][6]}/>
        )
      }
    </div>
  </div>;
};
