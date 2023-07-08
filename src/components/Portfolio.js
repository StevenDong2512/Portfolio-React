import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "project1.jpg",
      deployedLink: "https://example.com/project1",
      githubLink: "https://github.com/example/project1",
    },
    {
      title: "Project 2",
      image: "project2.jpg",
      deployedLink: "https://example.com/project2",
      githubLink: "https://github.com/example/project2",
    },
    {
      title: "Project 3",
      image: "project3.jpg",
      deployedLink: "https://example.com/project3",
      githubLink: "https://github.com/example/project3",
    },
  ];

  return (
    <section className="portfolio-section py-5">
      <div className="container">
        <h2 className="mb-4">Portfolio</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div className="card portfolio-card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.deployedLink}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View App
                    </a>
                    <a
                      href={project.githubLink}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
