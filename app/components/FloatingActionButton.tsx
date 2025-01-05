"use client";
import { useState } from "react";
import Modal from "./Modal";
import ChatIcon from "./icons/ChatIcon";
import emailjs from "@emailjs/browser";
import CheckIcon from "./icons/CheckIcon";

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        if (response.status !== 200) {
          setErrorMessage("Failed to send message. Please try again.");
          setTimeout(() => {
            setErrorMessage("");
          }, 2000);
          setIsSending(false);
          return;
        }
        setStatusMessage("Thanks for your message! It has been sent.");
        setTimeout(() => {
          setStatusMessage("");
          setIsOpen(false);
        }, 1500);
        setIsSending(false);
      },
      (_err) => {
        setErrorMessage("Failed to send message. Please try again.");
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
        setIsSending(false);
      }
    );
  };

  return (
    <>
      <button
        aria-label="Contact Me"
        onClick={handleOpen}
        className="fixed p-3 rounded-full shadow-lg bottom-4 right-4 bg-primary sm:bottom-4 sm:right-4"
      >
        <ChatIcon />
      </button>
      {isOpen && (
        <Modal title="Contact Me" onClose={handleClose} showClose={false}>
          {statusMessage ? (
            <div className="flex items-center">
              <p>{statusMessage}</p>
              <CheckIcon />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 border rounded text-text"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 border rounded text-text"
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full p-2 border rounded text-slate-950"
                />
              </label>
              {errorMessage && (
                <p className="text-secondary text-[15px] font-bold">
                  {errorMessage}
                </p>
              )}
              <div className="flex self-end gap-2">
                <button
                  type="reset"
                  disabled={isSending || Boolean(errorMessage)}
                  className="p-2 text-white rounded bg-secondary w-fit self-end"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={isSending || Boolean(errorMessage)}
                  className="p-2 text-white rounded bg-primary w-fit self-end"
                >
                  {isSending ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </>
  );
}
