import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AnimatedAboutText = ({ text }) => {
  // Split text into words
  const words = text.split(" ");

  return (
    <span className="text-3xl lg:text-5xl font-base text-gray-900 mb-16 flex flex-wrap gap-2">
      {words.map((word, i) => (
        <span key={i}>{word}</span>
      ))}
    </span>
  );
}
