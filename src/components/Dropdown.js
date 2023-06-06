import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelect }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleOptionClick = (option) => {
    setIsShown(false);
    onSelect(option.option);
  };

  return (
    <>
      <div className="w-48">
        <h3
          className="p-2 m-4 bg-gray-400 w-20 cursor-pointer"
          onClick={handleClick}
        >
          {selected ? selected : "Select..."}
        </h3>
        {options.map((option) => {
          return (
            <div
              className="m-4 cursor-pointer"
              key={option.value}
              onClick={() => {
                handleOptionClick(option);
              }}
            >
              {isShown && option.option}{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
