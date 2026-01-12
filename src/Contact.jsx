import React from "react"
import "./App.css"

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa"

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Feel free to connect with me through LinkedIn or GitHub.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="icon email" />
              <span>kumarisurbhi25@navgurukul.org</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon phone" />
              <span>+91 9341711793</span>
            </div>

            <div className="contact-item">
              <FaLinkedin className="icon linkedin" />
              <a
                href="https://www.linkedin.com/in/kumari-surbhi-8b5781360/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-item">
              <FaGithub className="icon github" />
              <a
                href="https://github.com/kumarisurbhi79"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
