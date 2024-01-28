import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Project.css"

export function Project(props) {
  return <div className="proj-container">
    <img src={props.img} className="proj-img"/>
    <span className="proj-title">{props.title}</span>
    <div className="proj-description-container">
      <span>{props.description}</span>
      <span className="proj-stack">{"Stack: " + props.stack}</span>
      <div className="icon-container">
        <a className="icon-wrapper" target="blank" href={props.github} >
          <FontAwesomeIcon className="icon" icon={faGithub}/>
        </a>
        <a className={"icon-wrapper " + (props.hidden ? "hidden" : "")} target="blank" href={props.demo}>
          <FontAwesomeIcon className="icon" icon={faGamepad}/>
        </a>
      </div>
    </div>
  </div>
}
