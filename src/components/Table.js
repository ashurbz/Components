import React from "react";

const Table = ({ data, config }) => {
  const headers = config.map((head) => {
    return <th key={head.label}>{head.label}</th>;
  });

  const body = data.map((fruit) => {
    return (
      <tr className="border-b" key={fruit.name}>
        <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td className="p-3">{fruit.score}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{headers}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
};

export default Table;
