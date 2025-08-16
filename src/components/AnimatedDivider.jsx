import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AnimatedDivider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: '100vw' } : { width: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        className="h-[2px] bg-amber-950 opacity-20 rounded-full mt-8"
        style={{ left: 0, position: 'static' }}
      />
    </div>
  );
}
