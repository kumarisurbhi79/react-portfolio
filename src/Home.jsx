import React from "react"
import "./App.css"
import profile from "./Musu.png"
import { Typewriter } from "react-simple-typewriter"
import resumePDF from "./Surbhi.pdf"



function Home() {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <h1>Hi, I'm Kumari surbhi</h1>

        <h3>
  <Typewriter
    words={["Web Developer.", "Frontend Developer."]}
    loop={true}
    cursor
    cursorStyle="|"
  />
</h3>

        <p>
        Entry-level Web Developer pursuing a Diploma in Software Development at NavGurukul, with hands-on
experience in HTML, CSS, JavaScript, React, and Tailwind CSS. Built and enhanced multiple responsive
web projects, improving user experience and interface interaction. Adept at collaborating in teams and
actively seeking opportunities to contribute to product-based teams while growing as a developer.
        </p>

       <div className="home-buttons">

  <a
    href={resumePDF}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-outline"
  >
    View Resume
  </a>

  <a
    href={resumePDF}
    download
    className="btn-fill"
  >
    Download Resume
  </a>

  <a href="#project" className="btn-outline1">See Projects</a>

</div>

      </div>

      <div className="home-right">
        <div className="image-box">
          <img src={profile} alt="Surbhi" />
        </div>
      </div>
    </section>
  );
};

export default Home;
