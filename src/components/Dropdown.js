import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelect }) => {
  const [isShown, setIsShown] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current.contains(event.target)) {
        setIsShown(false);
      }
    };
    const event = document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", event);
    };
  }, []);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleOptionClick = (option) => {
    setIsShown(false);
    onSelect(option.option);
  };

  return (
    <>
      <div ref={divEl} className="w-48">
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
