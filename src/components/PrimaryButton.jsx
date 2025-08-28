import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrimaryButton.css"; // Import the styles

const PrimaryButton = ({ text = "Read More", onClick, to }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick(e);
    }
  };
  return (
    <button className="custom-btn btn-7" onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
