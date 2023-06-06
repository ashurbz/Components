import React from "react";
import Link from "../Link";

const SideBar = () => {
  const links = [
    {
      label: "Accordian",
      path: "/accordian",
    },
    {
      label: "Button",
      path: "/button",
    },
    {
      label: "DropDown",
      path: "/dropdown",
    },
  ];
  return (
    <div>
      {links.map((link) => {
        return (
          <Link
            to={link.path}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            {link.label}{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
