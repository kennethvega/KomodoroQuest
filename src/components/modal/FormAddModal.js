import { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./FormAddModal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseModal}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const FormAddModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default FormAddModal;
