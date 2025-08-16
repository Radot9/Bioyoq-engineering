import React from "react";
import "./PrimaryButton.css"; // Import the styles

const PrimaryButton = ({ text = "Read More", onClick }) => {
  return (
    <button className="custom-btn btn-7" onClick={onClick}>
      <span>{text}</span>
      
    </button>
  );
};

export default PrimaryButton;
