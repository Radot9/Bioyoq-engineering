
import React, { useEffect, useState } from "react";
import icon from "../assets/images/bioyoq-logo.svg";
import "./Badge.css";

const badgeText = "BIOYOQ.WITH OVER 12 YEARS IN PRACTICE.";


export default function Badge() {
  const [shine, setShine] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShine(true);
      setTimeout(() => setShine(false), 1100);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="badge-container z-1000" style={{ position: 'relative' }}>
      <div className="badge-icon">
        <img src={icon} alt="BIOYOQ Icon" />
      </div>
      <svg className="badge-text spin" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="badgeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbe6" stopOpacity="1" />
            <stop offset="60%" stopColor="#FAB057" stopOpacity="1" />
            <stop offset="100%" stopColor="#9D2B21" stopOpacity="1" />
          </radialGradient>
          <path
            id="circlePath"
            d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          />
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9D2B21" />
            <stop offset="100%" stopColor="#FAB057" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#badgeGlow)" />
        <text fontSize="16" fontFamily="'Satoshi', sans-serif" fill="#9D2B21" letterSpacing="1">
          <textPath xlinkHref="#circlePath" startOffset="0" textLength="377" lengthAdjust="spacing">
            <tspan fontWeight="bold">&nbsp;BIOYOQ&nbsp;</tspan>. WITH OVER <tspan fontWeight="bold">24 YEARS</tspan> IN PRACTICE.
          </textPath>
        </text>
        <circle cx="100" cy="100" r="85" fill="none" stroke="url(#arcGradient)" strokeWidth="4" />
      </svg>
      {shine && <div className="badge-shine" />}
    </div>
  );
}