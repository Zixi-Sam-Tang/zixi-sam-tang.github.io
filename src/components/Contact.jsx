import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-card">
        <div className="contact-header">
          <span className="section-kicker">Contact</span>
          <h2 className="heading-2">Get in touch</h2>
        </div>
        <div className="contact-details">
          <a className="contact-detail" href="mailto:zixi.sam.tang@gmail.com">
            <FontAwesomeIcon className="contact-detail-icon" icon={faInbox} />
            <span>zixi.sam.tang@gmail.com</span>
          </a>
          <a className="contact-detail" href="tel:+16473947572">
            <FontAwesomeIcon className="contact-detail-icon" icon={faPhone} />
            <span>+1(647)-394-7572</span>
          </a>
        </div>
        <div className="contact-footer">
          <div className="contact-socials">
            <a
              className="contact-social"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Zixi-Sam-Tang"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="contact-social"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/zixi-sam-tang-b9b3921b2/"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <a href="#about" className="up-btn">
            Back to top
            <FontAwesomeIcon className="up-btn-icon" icon={faAnglesUp} />
          </a>
        </div>
      </div>
      <span className="copy-right">Copyright © {year} Zixi (Sam) Tang</span>
    </footer>
  );
}
