import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ".css./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
