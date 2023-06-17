import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        primary
        onClick={() => {
          setShow(!show);
        }}
      >
        Open Modal
      </Button>
      {show && <Modal isShow={setShow} />}
    </div>
  );
};

export default ModalPage;
