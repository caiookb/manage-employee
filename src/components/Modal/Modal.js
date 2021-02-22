import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";

const CustomModal = ({ active, setActive, children }) => {
  return (
    <Modal
      isOpen={active}
      onRequestClose={() => setActive(false)}
      className={styles.modal}
      testId="modal"
      data-testid="modal"
    >
      {React.Children.toArray(children).map((component) => component)}
    </Modal>
  );
};

export default CustomModal;
