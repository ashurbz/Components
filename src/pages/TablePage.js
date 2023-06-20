import React from "react";
import Table from "../components/Table";

const TablePage = () => {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 6,
    },
    {
      name: "banana",
      color: "bg-yellow-500",
      score: 4,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 2,
    },
  ];
  const config = [
    {
      label: "Name",
    },
    {
      label: "Color",
    },
    {
      label: "Score",
    },
  ];
  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
};

export default TablePage;
