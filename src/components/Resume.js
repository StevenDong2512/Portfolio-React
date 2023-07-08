import React from "react";
import "./css/Resume.css";

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href="resume.pdf" download>
        Download Resume
      </a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;
