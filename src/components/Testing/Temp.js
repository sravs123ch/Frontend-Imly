import React, { useState } from "react";

const PlusToXButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="main-container">
      <button
        onClick={handleClick}
        className={`w-16 h-16 rounded-full flex items-center justify-center relative transition-all duration-300 ${
          isClicked ? "bg-pink-500" : "bg-gray-800"
        }`}
      >
        <div className="relative w-8 h-8">
          {/* Horizontal line */}
          <span
            className={`block absolute h-1 w-8 bg-white rounded transition-all duration-300 ease-in-out ${
              isClicked ? "rotate-45" : "rotate-0"
            }`}
          ></span>
          {/* Vertical line */}
          <span
            className={`block absolute h-1 w-8 bg-white rounded transition-all duration-300 ease-in-out ${
              isClicked ? "-rotate-45" : "rotate-90"
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
};

export default PlusToXButton;
