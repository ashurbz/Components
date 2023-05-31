import React from "react";
import Button from "../components/Button";

const ButtonComponent = () => {
  return (
    <div>
      <Button primary>Click Me</Button>
      <Button secondary outline>
        Click Me
      </Button>
      <Button danger rounded>
        Click Me
      </Button>
      <Button warning>Click Me</Button>
      <Button
        success
        outline
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default ButtonComponent;
