import aboutImage from "../assets/about.png";
import "./About.css";

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <div className="avatar">
        <img src={aboutImage} alt="about image" />
      </div>
      <p>
        I'm an ecommerce-focused business analyst with a passion for enhancing
        customer journeys through data-driven insights. With a diverse
        background in economics, international business, and marketing
        analytics, I thrive in shaping innovative solutions for global
        enterprises.
      </p>
      <p>
        My entrepreneurial spirit and curiosity for emerging ecommerce trends
        drive me to deliver impactful solutions that prioritise customer
        satisfaction and sound business decisions. I also bring a unique
        perspective, valuing diversity and inclusion in all aspects of my work.
      </p>
      <p>
        Outside of work, I'm a passionate yoga enthusiast. It's through yoga
        that I find balance, focus, and inspiration, which ultimately translates
        into my professional endeavours.
      </p>
      <p>
        Let's collaborate to transform ecommerce, driving success while
        embracing diversity, inclusion, and a mindful approach.
      </p>
    </section>
  );
}

export default About;
