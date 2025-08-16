import React from "react";
import "./HamburgerButton.css";

export default function HamburgerButton({ checked, onClick, color, className, style }) {
  const strokeColor = color || '#fff';
  return (
    <div className={`menu menu--1 cross ${className || ''}`} style={{ position: 'relative', width: style?.width || 100, height: style?.height || 100 }}>
      <div
        className="hamburger-html-blur-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 0,
        }}
      />
      <label style={{ position: 'relative', width: style?.width || 100, height: style?.height || 100, zIndex: 1 }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onClick}
          style={{ display: "none" }}
        />
        <svg viewBox="0 0 100 100" width={style?.width || 100} height={style?.height || 100} xmlns="http://www.w3.org/2000/svg" style={{ color: '#fff' }}>
          {/* Remove circle, use HTML div for blur */}
          <path
            className="line--1"
            d="M0 40h62c13 0 6 28-4 18L35 35"
          />
          <path className="line--2" d="M0 50h70" />
          <path
            className="line--3"
            d="M0 60h62c13 0 6-28-4-18L35 65"
          />
        </svg>
      </label>
    </div>
  );
}
