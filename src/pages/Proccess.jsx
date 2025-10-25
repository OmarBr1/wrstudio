import { useEffect, useState } from "react";
import "./Proccess.css";

const steps = [
  {
    title: "Step 1 – Research",
    desc: "Share your idea with us. Let us understand your vision, goals, and requirements for your project.",
  },
  {
    title: "Step 2 – Design",
    desc: "We discuss and refine the concept together, offering insights and suggestions to make it more effective.",
  },
  {
    title: "Step 3 – Development",
    desc: "Our team starts building your project, translating your ideas into a functional and visually appealing web solution.",
  },
  {
    title: "Step 4 – Testing",
    desc: "We finalize the project by testing all features, optimizing performance, and ensuring a polished, high-quality result.",
  },
  {
    title: "Step 5 – Launch",
    desc: "Launch time! Your web solution goes live, and we provide ongoing support and guidance as needed.",
  },
];

const Proccess = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("Proccess");
      const sectionTop = section.offsetTop;
      const scrollTop = window.scrollY;
      const sectionHeight = section.offsetHeight;
      const stepWidth = sectionHeight / steps.length; // Treat height as scroll distance for each step
      const newIndex = Math.min(
        steps.length - 1,
        Math.floor((scrollTop - sectionTop) / stepWidth)
      );
      setActiveIndex(Math.max(0, newIndex));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="Proccess">
      <h2>Process</h2>
      <div className="steps-container">
        {steps.map((s, i) => (
          <div
            className={`step-card ${i <= activeIndex ? "visible" : ""}`}
            key={i}
            style={{ zIndex: i }} // Higher index gets higher z-index
          >
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proccess;
