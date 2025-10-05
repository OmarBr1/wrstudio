import InfoCard from "../components/InfoCard";
import "./About.css";
import { FaGlobe, FaLightbulb } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const About = () => {
  return (
    <div id="About">
      {/* Left side: About info */}
      <div className="text">
        <h2>About Us</h2>
        <p>Turning ideas into impactful digital experiences that last.</p>

        <div className="card-container">
          <InfoCard
            title="Our Mission"
            descr="At W&R Studio, our mission is to bring bold ideas to life through innovative digital solutions. We empower brands, creators, and businesses to achieve lasting impact with creativity, technology, and strategy combined."
            icon={<FaGlobe />}
          />
          <InfoCard
            title="Our Expertise"
            descr="We craft modern, scalable, and user-focused digital products — from sleek websites to interactive web apps. Our expertise blends precise design with cutting-edge development, delivering fast, secure, and growth-ready solutions."
            icon={<FaLightbulb />}
          />
          <InfoCard
            title="Our Objective"
            descr="Our goal is simple: make your brand stand out online. By aligning your vision with market trends, we create tailored strategies that exceed expectations and drive your digital success."
            icon={<TbTargetArrow />}
          />
        </div>

        <span>W&R Studio — From Concept to Click.</span>
      </div>

      {/* Right side: Why choose us */}
<div className="purpose">
  <h2>Why W&R Studio?</h2>

  <div className="mini-purp">
    <h3>Innovative Solutions</h3>
    <p>
      We combine creativity with technology to deliver cutting-edge digital experiences tailored to your vision.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Client-Centered Approach</h3>
    <p>
      Every project is crafted with your goals in mind, ensuring seamless communication, timely delivery, and measurable results.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Expert Team</h3>
    <p>
      Our team consists of skilled professionals across design, development, and marketing, ensuring high-quality results every time.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Modern Design</h3>
    <p>
      We create sleek, intuitive, and user-focused designs that engage visitors and elevate your brand.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Scalable Projects</h3>
    <p>
      Our solutions are built to grow with your business, allowing you to expand without limitations or rework.
    </p>
  </div>

  {/* New mini-purp blocks */}
  <div className="mini-purp">
    <h3>Performance-Driven</h3>
    <p>
      We focus on speed, security, and seamless functionality to ensure your digital presence performs at its best.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Continuous Support</h3>
    <p>
      Our relationship doesn’t end at launch — we provide ongoing support, updates, and optimization to keep your project thriving.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Data-Backed Strategies</h3>
    <p>
      Using analytics and insights, we make informed decisions that enhance engagement, conversions, and long-term growth.
    </p>
  </div>

  <div className="mini-purp">
    <h3>Sustainable Solutions</h3>
    <p>
      We build digital products that are future-proof, maintainable, and designed to adapt as your business evolves.
    </p>
  </div>
</div>

    </div>
  );
};

export default About;
