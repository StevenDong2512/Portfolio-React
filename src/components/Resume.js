import React from "react";
import "./Resume.css";
import ResumePdf from "../assets/resume.pdf";
import tiffany from "../assets/tiffany.png";
import lululemon from "../assets/lululemon.png";
import dm from "../assets/dm.png";
import unsw from "../assets/unsw.png";
import usyd from "../assets/usyd.png";
// Import logos for other companies as needed

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

  const education = [
    {
      university: "University of New South Wales",
      logo: unsw,
      degree:
        "Bachelor of Economics (Economics & International Business), Master of Marketing Analytics (Marketing Analytics & Business Strategy)",
    },
    {
      university: "University of Sydney",
      logo: usyd,
      degree: "Full Stack Web Development Bootcamp",
    },
  ];

  const experience = [
    {
      company: "Good On You",
      logo: lululemon,
      role: "Product analyst",
    },
    {
      company: "Lululemon Athletica",
      logo: lululemon,
      role: "Educator, eCommerce coordinator",
    },
    {
      company: "Tiffany & Co. Australia",
      logo: tiffany,
      role: "eCommerce coordinator",
    },
    {
      company: "Dan Murphy's",
      logo: dm,
      role: "Team member (Wine specialist)",
    },
    // Add more experience entries as needed
  ];

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <div className="education">
        <h3>Education</h3>
        {education.map((entry, index) => (
          <div key={index} className="education-details">
            {/* <img src={entry.logo} alt={entry.university} /> */}
            <h4>{entry.university}</h4>
            <p>{entry.degree}</p>
          </div>
        ))}
      </div>

      <div className="experience">
        <h3>Experience</h3>
        {experience.map((entry, index) => (
          <div key={index} className="experience-entry">
            {/* <img src={entry.logo} alt={entry.company} /> */}
            <div className="experience-details">
              <h4>{entry.company}</h4>
              <p>{entry.role}</p>
              {/* Add additional details like role, dates, etc. here */}
            </div>
          </div>
        ))}
      </div>

      <div className="proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
      <a href={ResumePdf} download>
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
