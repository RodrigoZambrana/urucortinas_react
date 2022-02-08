import React from "react";
import { Modal } from "@material-ui/core";

export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children } = props;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="modal"
      open={isOpenModal}
      onClose={closeModal}
      closeAfterTransition
    >
      <div>{children}</div>
    </Modal>
  );
}
