import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faLink } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  return <div id="contact">
    <a href="#about" className="up-btn">
      <FontAwesomeIcon className="icon" icon={faAnglesUp}/>
    </a>
    <div className="footer">
      <div>
        <a href="https://github.com/Zixi-Sam-Tang">
          <FontAwesomeIcon className="icon" icon={faGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/zixi-sam-tang-b9b3921b2/">
          <FontAwesomeIcon className="icon" icon={faLinkedin}/>
        </a>
      </div>
      <span className="heading-2">Get in touch:</span>
      <div className="contact-middle">
        <span><FontAwesomeIcon className="icon" icon={faInbox}/>: zixi.sam.tang@gmail.com</span>
        <span><FontAwesomeIcon className="icon" icon={faPhone}/>: +1(647)-394-7572</span>
      </div>
      <span className="copy-right">Copyright© 2024 Zixi (Sam) Tang</span>
    </div>
  </div>
};
