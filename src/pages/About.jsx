import InfoCard from "../components/InfoCard";
import "./About.css";
import { FaGlobe, FaLightbulb } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <div id="About">
      <h2 className="about-main-title">About Us</h2>
      <p className="about-subtitle">Turning ideas into impactful digital experiences that last.</p>

      <div className="about-tree">
        {/* Mission branch */}
        <div className="branch">
          <InfoCard
            title="Our Mission"
            descr="At W&R Studio, our mission is to bring bold ideas to life through innovative digital solutions."
            icon={<FaGlobe />}
          />
          <div className="mini-branch">
            <div className="mini-purp">
              <h3>Innovative Solutions</h3>
              <p>We combine creativity with technology to deliver tailored digital experiences.</p>
            </div>
            <div className="mini-purp">
              <h3>Client-Centered Approach</h3>
              <p>Every project is crafted with your goals in mind, ensuring communication and measurable results.</p>
            </div>
          </div>
        </div>

        {/* Expertise branch */}
        <div className="branch">
          <InfoCard
            title="Our Expertise"
            descr="We craft scalable, user-focused digital products that blend design precision with advanced development."
            icon={<FaLightbulb />}
          />
          <div className="mini-branch">
            <div className="mini-purp">
              <h3>Expert Team</h3>
              <p>Our skilled professionals deliver high-quality design, development, and marketing results.</p>
            </div>
            <div className="mini-purp">
              <h3>Modern Design</h3>
              <p>We build sleek, intuitive, and brand-elevating digital experiences.</p>
            </div>
            <div className="mini-purp">
              <h3>Scalable Projects</h3>
              <p>Our work grows with your business, ensuring flexibility and longevity.</p>
            </div>
          </div>
        </div>

        {/* Objective branch */}
        <div className="branch">
          <InfoCard
            title="Our Objective"
            descr="Our goal is to help your brand stand out online through strategy, innovation, and excellence."
            icon={<TbTargetArrow />}
          />
          <div className="mini-branch">
            <div className="mini-purp">
              <h3>Performance-Driven</h3>
              <p>We ensure your digital presence is fast, secure, and optimized for success.</p>
            </div>
            <div className="mini-purp">
              <h3>Continuous Support</h3>
              <p>We stay connected beyond launch — maintaining, updating, and improving your project.</p>
            </div>
            <div className="mini-purp">
              <h3>Data-Backed Strategies</h3>
              <p>Analytics guide our decisions to enhance engagement and conversions.</p>
            </div>
            <div className="mini-purp">
              <h3>Sustainable Solutions</h3>
              <p>We create future-proof products designed to evolve with your business.</p>
            </div>
          </div>
        </div>
      </div>

      <span className="about-footer">W&R Studio — From Concept to Click.</span>
    </div>
  );
};

export default About;
