import React from "react";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__section-heading">About Project</h2>

      <div className="about-project__description">
        <div>
          <h3 className="about-project__heading">The diploma project included 5 stages</h3>
          <p className="about-project__text">Plan creation, backend, layout, functionality implementation, and final fixes.</p>
        </div>
        <div>
          <h3 className="about-project__heading">It took 5 weeks to complete the diploma</h3>
          <p className="about-project__text">You had to meet soft and hard deadlines in order to pass the diploma successfully.</p>
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="about-project__timeline_green">
          <span>1 week</span>
        </div>
        <div className="about-project__timeline_grey">
          <span>4 week</span>
        </div>
      </div>

      <div className="about-project__timeline_parts">
        <div className="about-project__timeline_parts-backend">
          <span>Back-end</span>
        </div>
        <div className="about-project__timeline_parts-frontend">
          <span>Front-end</span>
        </div>
      </div>

    </section>
  )
}

export default AboutProject;
