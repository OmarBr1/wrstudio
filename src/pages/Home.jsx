import "./Home.css";
import RotatingText from "../components/RotatingText";
import LiquidEther from "../components/LiquidEther";

const Home = () => {
  return (
    <>
      <div id="home" style={{ position: "relative", overflow: "hidden" }}>
        {/* Liquid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0, // stays behind
          }}
        >
          <LiquidEther
            colors={["#1e1b4b", "#4338ca", "#ffd369"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        {/* Hero content: flex row */}
        <div
          className="hero-content"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Left side: text */}
          <div className="hero-text">
            <h1>
              W&R Studio For Your 
              <RotatingText
                texts={["Next", "Future", "Ideas", "Concepts", "And", "More!"]}
                mainClassName="px-2 sm:px-2 md:px-3 text-[#ffd369] font-bold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h1>
            <p>
              W&R Studio turns your thoughts into reality with a click, where
              ideas become digital reality, From sleek portfolios to powerful
              landing pages, we design with purpose and precision.
            </p>
            <p className="sub-hero">
              Let’s craft your online presence together — fast, modern, and
              built to impress.
            </p>
          </div>

          {/* Right side: image */}
          <div className="hero-img"></div>
        </div>

        {/* Buttons (centered below) */}
        <div className="btn-sec" style={{ position: "relative", zIndex: 1 }}>
          <button>Our Services</button>
          <button>Contact us!</button>
        </div>
      </div>
    </>
  );
};

export default Home;
