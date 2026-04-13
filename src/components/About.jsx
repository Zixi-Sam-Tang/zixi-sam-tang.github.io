import React from "react";
import "./About.css";
import pfp from "../assets/pfp.png";
import resume from "../assets/Zixi-Sam-Tang.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-copy">
        <span className="section-kicker">About</span>
        <h1 className="intro">
          Hello! I'm <span className="highlight">Sam Tang</span>.
        </h1>
        <p className="intro-text">
          I'm a <span className="highlight">Computer Science</span> student at the <span className="highlight">University of Waterloo</span>.
          My current specialty lies in Full-Stack Development (leaning towards Backend), but I am
          also looking for opportunities to explore other positions! Apart
          from my academics and coding, I like to rock climb, blacksmith,
          and game.
        </p>
        <div className="about-socials">
          <a
            className="about-social"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Zixi-Sam-Tang"
          >
            <FontAwesomeIcon className="about-social-icon" icon={faGithub} />
            <span className="about-social-label">GitHub</span>
          </a>
          <a
            className="about-social"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/zixi-sam-tang-b9b3921b2/"
          >
            <FontAwesomeIcon className="about-social-icon" icon={faLinkedin} />
            <span className="about-social-label">LinkedIn</span>
          </a>
          <a
            className="about-social"
            target="_blank"
            rel="noreferrer"
            href={resume}
          >
            <FontAwesomeIcon className="about-social-icon" icon={faPaperclip} />
            <span className="about-social-label">Resume</span>
          </a>
        </div>
      </div>
      <div className="pfp-container">
        <div className="pfp-shell">
          <img src={pfp} className="pfp" alt="Sam Tang" />
        </div>
      </div>
    </section>
  );
}
