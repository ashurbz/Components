import React from "react";
import Button from "../components/Button";

const ButtonComponent = () => {
  return (
    <div>
      <Button primary>Click Me</Button>
      <Button secondary>Click Me</Button>
      <Button danger>Click Me</Button>
      <Button warning>Click Me</Button>
      <Button success>Click Me</Button>
    </div>
  );
};

export default ButtonComponent;
