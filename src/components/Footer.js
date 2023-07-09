import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/StevenDong2512">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/steven-dong/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stevend_ong/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <h7>Copyright © Steven Dong</h7>
    </footer>
  );
}

export default Footer;
