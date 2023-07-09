import React from "react";
import "./Home.css";
import myImage from "../assets/myImage.png";

function Home() {
  return (
    <section>
      <h2>Welcome to My Portfolio</h2>
      <div className="image-container">
        <img src={myImage} alt="My Image" className="my-image" />
      </div>
      <div className="content-container">
        <p>G'day! I'm stoked to have you on my portfolio website.</p>
        <p>
          I am an ecommerce-focused business analyst with a passion for
          enhancing customer journeys through data-driven insights. With
          expertise in marketing consulting, I shape business models and craft
          solutions for global enterprises. Leveraging my background in
          economics, international business, and marketing analytics, I
          revolutionise the customer experience by uncovering valuable
          connections and infusing creativity.
        </p>
        <p>
          But my interests go beyond the business world. I am also a passionate
          yoga enthusiast and fashion lover. Through yoga, I find balance,
          focus, and inspiration, which ultimately translates into my
          professional endeavours. Fashion is another realm where I draw
          inspiration and appreciation for creativity and self-expression.
        </p>
        <p>
          In addition to my professional pursuits, I actively engage in
          volunteer experiences. I have been involved in events like Vivid
          Sydney and Mardi Gras Sydney, contributing to the community and
          celebrating diversity. These experiences have taught me the importance
          of inclusion, empathy, and creating a positive impact on society.
        </p>
        <p>
          On this website, you'll find a showcase of my professional
          achievements, educational background, and experiences. I invite you to
          explore my works.
        </p>
        <p>
          Feel free to navigate through the different sections and learn more
          about my expertise in website front-end development, marketing
          analytics, and business strategy. Discover how I collaborate with
          diverse teams, bridge stakeholder gaps, and deliver impactful
          solutions that drive customer satisfaction in business success.
        </p>
        <p>
          If you have any enquiries, partnership opportunities, or simply want
          to connect, don't hesitate to reach out through the contact
          information provided. I'm excited to connect with you.
        </p>
        <p>
          Thank you for visiting, and I hope you enjoy your time exploring my
          portfolio!
        </p>
      </div>
    </section>
  );
}

export default Home;
