import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <>
      <div>
        {items.map((item, index) => {
          const expanded = index === expandedIndex;
          return (
            <>
              <div className="flex" key={item.id}>
                <h3
                  onClick={() => {
                    setExpandedIndex(index);
                  }}
                >
                  {item.label}
                </h3>
                <span>{expanded ? "Down" : "Left"}</span>
              </div>
              <div>
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
