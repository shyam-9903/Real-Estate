// AboutUs.js
import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <div className="overlay">
          <h1>About Us</h1>
          <p>Discover more about our journey and mission in real estate.</p>
        </div>
      </section>

      <section className="intro">
        <h2>Welcome to Real Estate</h2>
        <p>
          We are your premier real estate partner, committed to delivering
          exceptional service and comprehensive solutions for all your property
          needs. Our team of experts is here to guide you through every step of
          your real estate journey.
        </p>
      </section>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide a seamless and stress-free real estate experience by
          combining technology, market knowledge, and personalized service.
        </p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://i.postimg.cc/BQ23sGcp/member7.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_x12nDNT7C4nhJOePcOPmTK7NVJynpAnK3x4I-rnFZs1_c6cRL1xul8cLrFHooCAFUs&usqp=CAU" alt="Jane Smith" />
            <h3>Jane Smith</h3>
            <p>Lead Agent</p>
          </div>
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7d656BYteHVhQa6OFCnxTqgyVXdRf_XyLxaogLKPuoIvsLmc7upU3F_bdFuDQq4uxaoo&usqp=CAU" alt="Mike Johnson" />
            <h3>Mike Johnson</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>
      <section className="extra-content">
        <h2>Thank You !</h2>
        <p>
          "Happy to Work with you !"
        </p>
      </section>
    </div>
  );
};

export default About;
