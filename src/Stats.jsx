import React from "react";
import "./App.css";

function Stats() {
  return (
    <>
      <section className="stats-section" id="stats">
        <h2 className="stats-title">GitHub Stats</h2>

        <div className="stats-cards">
          <div className="stats-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh2wws4MhZvfLgPHLK8Kbnj0jIQjDJH1JQA&s"
              alt="GitHub Stats"
            />
          </div>

          <div className="stats-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnQd3Nh8Ub4tNhjzj8goZ9Jq5qzROIlBETew&s"
              alt="Top Languages"
            />
          </div>
        </div>

        <h3 className="calendar-title">Contribution Calendar</h3>

        <div className="calendar-card">
          <img
            src="https://ghchart.rshah.org/kumarisurbhi79"
            alt="GitHub Contribution Calendar"
          />
        </div>
      </section>
    </>
  );
}

export default Stats;
