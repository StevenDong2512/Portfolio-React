import React from "react";
import "./Resume.css";
import ResumePdf from "../assets/resume.pdf";

function Resume() {
  const proficiencies = [
    "Ecommerce Analysis",
    "Marketing Consulting",
    "Data-driven Insights",
    "Business Strategy",
    "Customer Experience Enhancement",
    "Project Execution",
    "Market Research",
    "Data Analytics",
  ];
  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <a href={ResumePdf} download>
        Download Resume
      </a>
      <ul>
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
