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
            colors={["#1e1b4b", "#221f16ff", "#292450ff"]}
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
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left side: text */}
          <div className="hero-text" style={{ flex: 1, paddingRight: "20px" }}>
            <h1>
              W&R Studio
              {/* <RotatingText
                texts={["Next", "Future", "Ideas", "Concepts", "And", "More!"]}
                mainClassName="px-2 sm:px-2 md:px-3 text-[#ffd369] font-bold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              /> */}
            </h1>
            <p>
              W&R Studio turns your thoughts into reality with a click, where
              ideas become digital reality. From sleek portfolios to powerful
              landing pages, we design with purpose and precision.
            </p>
            <p className="sub-hero">
              Let’s craft your online presence together — fast, modern, and
              built to impress.
            </p>
          </div>

          {/* Right side: SVG logo */}
          <div className="hero-logo" style={{ flex: 1, textAlign: "center" }}>
            <svg
              width="400"
              height="140"
              viewBox="0 0 450 140"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="450" height="140" fill="transparent" />
              <g
                fill="none"
                stroke="#1F2937"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20,110 L55,20 L90,110" /> {/* W */}
                <path d="M110,110 L145,20 L180,110 L145,65 L180,65" />{" "}
                {/* R */}
              </g>
              <text
                x="200"
                y="90"
                fontFamily="Poppins, sans-serif"
                fontSize="36"
                fill="#1F2937"
                fontWeight="600"
              >
                Studio
              </text>
              <line
                x1="200"
                y1="95"
                x2="420"
                y2="95"
                stroke="#2563EB"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <g>
                <rect x="200" y="95" width="6" height="6" fill="#2563EB">
                  <animate
                    attributeName="x"
                    from="200"
                    to="420"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="210" y="95" width="5" height="5" fill="#60A5FA">
                  <animate
                    attributeName="x"
                    from="210"
                    to="420"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="220" y="95" width="4" height="4" fill="#3B82F6">
                  <animate
                    attributeName="x"
                    from="220"
                    to="420"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </rect>
              </g>
              <g>
                <circle cx="55" cy="65" r="35" fill="#2563EB" opacity="0.1" />
                <circle cx="145" cy="65" r="35" fill="#60A5FA" opacity="0.1" />
              </g>
            </svg>
          </div>
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
