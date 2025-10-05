import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import './RotatingText.css'


const RotatingText = ({
  texts,
  mainClassName,
  staggerFrom = "first",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  splitLevelClassName = "overflow-hidden",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts, rotationInterval]);

  return (
    <div className={`flex items-center ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className={splitLevelClassName}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
