import CircularGallery from "../components/CircularGallery";
import Blog from "../assets/blog.jpg";
import Estore from "../assets/estore2.jpg";
import LandingPage from "../assets/landingPage.jpg";
import Saas from "../assets/saasi.jpg";

import "./Service.css";

const Services = () => {
  return (
    <>
      <div id="services">
        <div className="our-service">
          <h2>Our Services</h2>
          <p>
            We turn your ideas into impactful digital experiences — from sleek
            designs to robust web solutions, crafted with precision and
            creativity.
          </p>
        </div>
        <div className="cards-container">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              items={[
                { image: Blog, text: "Personal Blog" },
                { image: Estore, text: "EStore" },
                { image: LandingPage, text: "Landing Page" },
                { image: Saas, text: "A Special Service" },
              ]}
            />
          </div>
        </div>

        <button>A Specific Project? Contact us</button>
      </div>
    </>
  );
};

export default Services;
