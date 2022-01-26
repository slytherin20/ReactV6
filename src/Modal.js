import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  let ref = useRef(null);

  if (!ref.current) {
    ref.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(ref.current);

    return () => {
      modalRoot.removeChild(ref.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, ref.current);
};

export default Modal;
