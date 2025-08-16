import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const MarqueeScrollText = ({ text }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Move from right (800px) to left (-400px) faster as you scroll
  const xRaw = useTransform(scrollYProgress, [0, 1], [800, -400]);
  const x = useSpring(xRaw, { mass: 2, stiffness: 120, damping: 40 });
  // Fade in gently
  const opacityRaw = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const opacity = useSpring(opacityRaw, { mass: 2, stiffness: 120, damping: 40 });
  return (
  <div ref={ref} className="w-full flex items-center justify-center overflow-x-hidden overflow-y-hidden bg-transparent">
      <motion.div
        style={{ x, opacity, color: '#9D2B21' }}
        className="whitespace-nowrap text-7xl uppercase font-black md:text-9xl"
      >
        {text}
      </motion.div>
    </div>
  );
};
