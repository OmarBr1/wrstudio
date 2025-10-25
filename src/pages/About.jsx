import InfoCard from "../components/InfoCard";
import "./About.css";
import { FaGlobe, FaLightbulb } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <div id="About">
      <h2 className="about-main-title">About Us</h2>
      <p className="about-subtitle">
        Transforming bold ideas into meaningful digital experiences.
      </p>

      <div className="about-tree">
        {/* Mission branch */}
        <div className="branch">
          <InfoCard
            title="Our Mission"
            descr="At Codevnium, we help brands turn ideas into impactful digital realities."
            icon={<FaGlobe />}
          />
          <div className="mini-branch">
            <div className="mini-purp">
              <h3>Innovation First</h3>
              <p>We merge creativity and technology to craft unique, effective solutions.</p>
            </div>
            <div className="mini-purp">
              <h3>Built Around You</h3>
              <p>Your goals shape our process — from strategy to measurable results.</p>
            </div>
          </div>
        </div>

        {/* Expertise branch */}
        <div className="branch">
          <InfoCard
            title="Our Expertise"
            descr="We design and build digital products that balance beauty, performance, and scalability."
            icon={<FaLightbulb />}
          />
          <div className="mini-branch">
            <div className="mini-purp">
              <h3>Multidisciplinary Team</h3>
              <p>Our experts unite design, development, and marketing under one creative vision.</p>
            </div>
            <div className="mini-purp">
              <h3>Modern Aesthetics</h3>
              <p>Clean, intuitive interfaces that elevate your brand and engage users.</p>
            </div>
            <div className="mini-purp">
              <h3>Built to Scale</h3>
              <p>Flexible architectures that grow seamlessly with your business.</p>
            </div>
          </div>
        </div>

        {/* Objective branch */}
        <div className="branch">
          <InfoCard
            title="Our Objective"
            descr="To empower brands with sustainable, performance-driven digital strategies."
            icon={<TbTargetArrow />}
          />
          <div className="mini-branch">
            <div className="mini-purp">
              <h3>Performance at Core</h3>
              <p>Fast, secure, and optimized experiences that drive real-world results.</p>
            </div>
            <div className="mini-purp">
              <h3>Long-Term Partnership</h3>
              <p>We stay with you beyond launch — refining and improving continuously.</p>
            </div>
            <div className="mini-purp">
              <h3>Data-Driven Insights</h3>
              <p>Every decision is backed by analytics and user behavior data.</p>
            </div>
          </div>
        </div>
      </div>

      <span className="about-footer">
        Codevnium — From Concept to Click.
      </span>
    </div>
  );
};

export default About;
