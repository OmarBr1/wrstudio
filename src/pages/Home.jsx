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
          {/* <LiquidEther
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
          /> */}
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
            <h1>Codevnium</h1>
            <p>
              Codevnium is where creativity meets code. We bring your ideas to
              life through bold design, smart functionality, and a touch of
              innovation.
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
              className="codevnium-logo"
            >
              <rect width="450" height="140" fill="transparent" />

              {/* Elemental emblem (C + core symbol) */}
              <g
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="6"
                strokeLinecap="round"
              >
                <circle cx="70" cy="70" r="40" opacity="0.15" />
                <path
                  d="M90,45 A30,30 0 1,0 90,95"
                  stroke="var(--accent-secondary)"
                />
                <circle cx="70" cy="70" r="4" fill="var(--accent-tertiary)">
                  <animate
                    attributeName="r"
                    values="4;6;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Brand Name */}
              <text
                x="140"
                y="80"
                fontFamily="Poppins, sans-serif"
                fontSize="40"
                fill="var(--text-color)"
                fontWeight="600"
                letterSpacing="2"
              >
                Codevnium
              </text>

              {/* Animated energy line */}
              <line
                x1="140"
                y1="90"
                x2="420"
                y2="90"
                stroke="var(--accent-primary)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="140" cy="90" r="4" fill="var(--accent-primary)">
                <animate
                  attributeName="cx"
                  from="140"
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
              </circle>

              {/* Subtle glowing element */}
              <circle
                cx="70"
                cy="70"
                r="55"
                stroke="var(--accent-secondary)"
                strokeWidth="1"
                opacity="0.1"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 70 70"
                  to="360 70 70"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </circle>
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

{
  /* <RotatingText
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
              /> */
}
