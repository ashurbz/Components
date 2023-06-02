import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
const Accordian = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      <div className="border border-black p-2 m-4">
        {items.map((item, index) => {
          const expanded = index === expandedIndex;
          return (
            <>
              <div className="flex p-4 m-4 bg-gray-400" key={item.id}>
                <h3
                  className="cursor-pointer"
                  onClick={() => {
                    expandedIndex === index
                      ? setExpandedIndex(null)
                      : setExpandedIndex(index);
                  }}
                >
                  {item.label}
                </h3>
                <span className="m-1">
                  {expanded ? <AiFillCaretDown /> : <AiFillCaretLeft />}
                </span>
              </div>
              <div className=" m-4">
                <span>{expanded && item.content}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accordian;
