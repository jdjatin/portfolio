import React from "react";
import { ModalCard, ModalLink, Overlay } from "../styles/Modal.styled";
const Modal = ({ toggleHandler }) => {
  return (
    <>
      <OverlayBackground toggleHandler={toggleHandler} />
      <ModalCard>
      Contact Us . Go to {' '}
        <ModalLink>
          jatin.deswal@outlook.com
        </ModalLink>
      </ModalCard>
    </>
  );
};

const OverlayBackground = ({ toggleHandler }) => {
  return <Overlay onClick={toggleHandler} />;
};

export default Modal;
