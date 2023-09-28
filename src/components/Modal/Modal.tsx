import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

type ModalProps = {
  children: ReactNode;
  closeModal: () => void;
};

export const Modal = ({ children, closeModal }: ModalProps) => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const inModal = (e.target as Element).closest("[data-id=modal]");
    if (inModal) return;
    closeModal();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return createPortal(
    <>
      <div onClick={handleClick} className={styles.overlay}>
        <div data-id="modal" className={styles.modal}>
          <button onClick={closeModal} className={styles.close}></button>

          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};
