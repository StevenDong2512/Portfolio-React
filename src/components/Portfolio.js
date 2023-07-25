import React from "react";
import "./Portfolio.css";
import CityRImg from "../assets/CityR.png";
import WeatherImg from "../assets/WeaterF.png";
import PasswordImg from "../assets/PasswordG.png";
import PortfolioImg from "../assets/Portfolio.png";
import RepairImg from "../assets/RepairF.png";
import QuizImg from "../assets/Quiz.png";
import NoteImg from "../assets/noteT.png";
import WorkImg from "../assets/workS.png";
import LogoImg from "../assets/logoG.png";
import EcomImg from "../assets/EcomR.png";

function Portfolio() {
  const projects = [
    {
      title: "EcomRevolve",
      image: EcomImg,
      deployedLink: "https://ecomrevolve-3cc9d9562799.herokuapp.com/",
      githubLink: "https://github.com/StevenDong2512/EcomRevolve",
    },
    {
      title: "CityReviwr",
      image: CityRImg,
      deployedLink: "https://cityreviwr.herokuapp.com/",
      githubLink: "https://github.com/StevenDong2512/Cityreviewr",
    },
    {
      title: "Weather Forecast",
      image: WeatherImg,
      deployedLink: "https://stevendong2512.github.io/weather/",
      githubLink: "https://github.com/StevenDong2512/weather",
    },
    {
      title: "Password Generator",
      image: PasswordImg,
      deployedLink: "https://stevendong2512.github.io/password-generator/",
      githubLink: "https://github.com/StevenDong2512/password-generator",
    },
    {
      title: "HTML Portfolio",
      image: PortfolioImg,
      deployedLink: "https://stevendong2512.github.io/SD-portfolio/",
      githubLink: "https://github.com/StevenDong2512/SD-portfolio",
    },
    {
      title: "Repair Finder",
      image: RepairImg,
      deployedLink: "https://stevendong2512.github.io/RepairFind/",
      githubLink: "https://github.com/StevenDong2512/RepairFind",
    },
    {
      title: "Quiz App",
      image: QuizImg,
      deployedLink: "https://stevendong2512.github.io/Quiz/",
      githubLink: "https://github.com/StevenDong2512/Quiz",
    },
    {
      title: "Note Taker",
      image: NoteImg,
      deployedLink: "https://notetakersd2512.herokuapp.com/notes",
      githubLink: "https://github.com/StevenDong2512/note_taker",
    },
    {
      title: "Work Day Scheduler",
      image: WorkImg,
      deployedLink: "https://stevendong2512.github.io/workday-schedule/",
      githubLink: "https://github.com/StevenDong2512/workday-schedule",
    },
    {
      title: "Logo Generator",
      image: LogoImg,
      deployedLink:
        "https://drive.google.com/file/d/1Wbpmt4eAk0evLLQtvsxzjz9V5mHwHuYZ/view?pli=1",
      githubLink: "https://github.com/StevenDong2512/LogoGenerator",
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
