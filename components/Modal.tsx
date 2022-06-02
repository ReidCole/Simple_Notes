import { ReactNode, useContext, useEffect, useState } from "react";
import { UIContext } from "../context/UIContext";

type Props = {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  heading: string;
};

const Modal: React.FC<Props> = ({ children, className, isOpen, setIsOpen, heading }) => {
  const uiContext = useContext(UIContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  function close() {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  }

  return (
    <>
      <div
        className={
          "fixed top-0 left-0 bg-opacity-50 w-screen flex flex-col justify-center items-center z-20 transition-colors pointer-events-none " +
          (isOpen ? "bg-black" : "bg-transparent")
        }
        style={{ height: `${uiContext.windowHeight}px` }}
      />
      <div
        id="modal-container"
        className={
          "fixed top-0 left-0 bg-opacity-70 w-screen flex flex-col justify-center items-center z-20 transition-transform " +
          (isOpen ? "scale-100 " : "scale-0 ") +
          (isVisible ? "visible " : "invisible ") +
          className
        }
        style={{ height: `${uiContext.windowHeight}px` }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.id == "modal-container") {
            close();
          }
        }}
      >
        <div className="bg-white rounded-lg flex flex-col items-center gap-2 p-2">
          <div className="flex flex-row justify-between w-full items-center">
            <p className="font-bold text-lg">{heading}</p>{" "}
            <button className="focus-visible:outline-black" onClick={() => close()}>
              <i className="bi-x-circle-fill flex text-xl text-red-600" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
