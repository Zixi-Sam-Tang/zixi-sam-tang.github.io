import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css";

export function Project(props) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={props.img} className="project-image" alt={`${props.title} preview`} />
      </div>
      <div className="project-body">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <p className="project-stack">
          <span className="project-stack-label">Stack</span>
          {props.stack}
        </p>
        <div className="project-actions">
          <a
            className="project-link"
            target="_blank"
            rel="noreferrer"
            href={props.github}
          >
            <FontAwesomeIcon className="project-link-icon" icon={faGithub} />
            Code
          </a>
          {!props.hidden && (
            <a
              className="project-link project-link-secondary"
              target="_blank"
              rel="noreferrer"
              href={props.demo}
            >
              <FontAwesomeIcon className="project-link-icon" icon={faArrowUpRightFromSquare} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
