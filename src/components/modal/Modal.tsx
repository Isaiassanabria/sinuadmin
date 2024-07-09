import React, { useState } from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  titleBtn: string;
  isForm?: boolean;
  header: string;
  position?: "bottom-left" | "top-right" | "top-left";
}

const Modal: React.FC<ModalProps> = ({
  children,
  isForm,
  titleBtn,
  header,
  position,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className={`fixed mb-4 mr-8 bg-cyan-900 z-20 hover:bg-cyan-800 font-semibold shadow-md text-white text-sm py-2 px-4 rounded-lg cursor-pointer ${
          position === "bottom-left"
            ? "ml-72 bottom-0 left-0"
            : position === "top-right"
            ? "top-0 right-0"
            : "bottom-0 right-0"
        }`}
      >
        {titleBtn}
      </button>

      {isModalOpen && (
        <div
          className={`main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated ${
            isModalOpen ? "fadeIn" : "fadeOut"
          } faster`}
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              {/* Title */}
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">{header}</p>
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={closeModal}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                  </svg>
                </div>
              </div>
              {/* Body */}
              {children}
              {/* Footer */}
              {!isForm && (
                <div className="flex justify-end pt-2">
                  <button
                    className="focus:outline-none modal-close px-4 mr-2 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
