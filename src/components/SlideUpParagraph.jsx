import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const SlideUpParagraph = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-lg text-gray-700"
    >
      {children}
    </motion.p>
  );
};
