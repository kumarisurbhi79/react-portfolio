import React from 'react'
import "./App.css"

function Project() {
  return (
      <section className="projects" id="project">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjY41waIJjCcdDgyoDn0eDHlfT1gNVLh8TTQ&s"
            alt="Task Manager"
          />

          <h3>Task Manager Application</h3>

          <p>
           Built a task management app with features to create, edit, and
           delete tasks using JavaScript. Enhanced logical thinking and DOM
           manipulation skills while improving user experience
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

         <div className="project-buttons">
  <a
    href="https://github.com/kumarisurbhi79/Task-manager"target="_blank"rel="noopener noreferrer"className="btn-gray"
  >
    GitHub
  </a>

  <a
    href="https://kumarisurbhi79.github.io/Task-manager/" target="_blank" rel="noopener noreferrer"className="btn-gradient"
  >
    Live / Demo
  </a>
</div>

        </div>

        <div className="project-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1lOY2YMDpvcJd_geojFR_g69GWriKB5YMw&s"
            alt="Internshala Clone"
          />

          <h3>Internshala Clone</h3>

          <p>
           Replicated core features of Internshala platform using React, focusing on smooth navigation and user-centric interface .
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Component</span>
            <span>Export–Import</span>
          </div>

         <div className="project-buttons">
  <a
    href="https://github.com/kumarisurbhi79/internshalaclone"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gray"
  >
    GitHub
  </a>

  <a
    href="https://magenta-medovik-dcad7b.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gradient"
  >
    Live / Demo
  </a>
</div>

        </div>


        <div className="project-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLy3H82wp7vSfo6_zS2iFVWTwuyDaD9iSUg&s"
            alt="TechSphere"
          />

          <h3>TechSphere</h3>

          <p>
          TechSphere is a modern technology platform focused on web development and emerging tech skills. It aims to make learning simple, practical, and accessible for everyone.
          </p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

         <div className="project-buttons">
  <a
    href="https://github.com/kumarisurbhi79/TechSphere"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gray"
  >
    GitHub
  </a>

  <a
    href="https://kumarisurbhi79.github.io/TechSphere/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gradient"
  >
    Live / Demo
  </a>
</div>

        </div>
      </div>
    </section>
  )
}

export default Project