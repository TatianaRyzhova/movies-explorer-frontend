import React from "react";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__section-heading">Technologies</h2>
      <div className="techs__description">
        <h3 className="techs__heading">7 technologies</h3>
        <p className="techs__text">In the course of web development, we mastered the technologies that we applied in the
          diploma project.</p>
      </div>
      <ul className="techs__technologies">
        <li className="techs__technology">HTML</li>
        <li className="techs__technology">CSS</li>
        <li className="techs__technology">JS</li>
        <li className="techs__technology">React</li>
        <li className="techs__technology">Git</li>
        <li className="techs__technology">Express.js</li>
        <li className="techs__technology">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;
