import React from "react";
import "..css/About.css";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div className="avatar">
        <img src="avatar.jpg" alt="Avatar" />
      </div>
      <p>Short bio about the developer...</p>
    </section>
  );
}

export default About;
