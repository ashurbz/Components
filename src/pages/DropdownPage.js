import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const listItems = [
  {
    option: "green",
    value: "green",
  },
  {
    option: "blue",
    value: "blue",
  },
  {
    option: "yellow",
    value: "yellow",
  },
];

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);

  const onSelect = (option) => {
    setSelected(option);
  };

  return (
    <div>
      <Dropdown selected={selected} onSelect={onSelect} options={listItems} />
    </div>
  );
};

export default DropdownPage;
