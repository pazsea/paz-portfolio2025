import { ReactNode, useEffect } from "react";
import CloseIcon from "./icons/CloseIcon";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="w-full h-full max-w-lg p-4 rounded-lg bg-background sm:border sm:border-b-color text-text sm:h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative sm:p-4 bg-background text-text">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-xl ">{title}</p>
            <button aria-label="Close" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
