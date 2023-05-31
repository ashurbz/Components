import React from "react";
import Accordian from "../components/Accordian";

const AccordianPage = () => {
  const items = [
    {
      id: "ajkaskjak",
      label: "Where should we use React",
      content:
        "We can use react anywhere we want, its front end library, we can install it or use CDN",
    },
    {
      id: "jkhsak",
      label: "Where should we use JavaScript",
      content:
        "We can use JavaScript anywhere we want in frontend, we have to just link it in html as script",
    },
    {
      id: "sbdxskj",
      label: "Where should we use NextJs",
      content:
        "We can use NextJs anywhere we want, its react framework, we can install it or use CDN",
    },
  ];
  return (
    <div>
      <Accordian items={items} />
    </div>
  );
};

export default AccordianPage;
