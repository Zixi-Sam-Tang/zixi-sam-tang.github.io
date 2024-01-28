import React from "react";
import "./About.css";
import pfp from "../assets/pfp.png";
import resume from '../assets/Zixi-Sam-Tang.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

export function About() {
  return <div id="about">
    <div className="pfp-container">
      <img src={pfp} className="pfp"/>
    </div>
    <span className="intro">Hello! I'm <span className="highlight">Sam Tang</span>.</span>
    <span className="intro-text">
      I'm a <span className="highlight">Computer Science</span> student at the <span className="highlight">University of Waterloo</span>.
      My current specialty lies in Full-Stack Development (leaning towards Backend), but I am 
      also looking for opportunities to explore other positions! Apart 
      from my academics and coding, I like to rock climb, blacksmith,
      and game.
    </span>
    <div className="icon-container">
      <a className="icon-wrapper" target="blank" href="https://github.com/Zixi-Sam-Tang">
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
      <a className="icon-wrapper" target="blank" href="https://www.linkedin.com/in/zixi-sam-tang-b9b3921b2/">
        <FontAwesomeIcon className="icon" icon={faLinkedin}/>
      </a>
      <a className="icon-wrapper" target="blank" href={resume} >
        <FontAwesomeIcon className="icon" icon={faPaperclip}/>
      </a>
    </div>
  </div>;
};
