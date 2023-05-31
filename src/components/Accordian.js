import React from "react";

const Accordian = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.label}</h3>
            <span>{item.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
