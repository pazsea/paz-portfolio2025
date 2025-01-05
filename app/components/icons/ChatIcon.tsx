import React from "react";

const ChatIcon = () => {
  return (
    <>
      <svg
        className={"block sm:hidden"}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 8 8"
      >
        <path
          fill="currentColor"
          d="M0 0v5l1-1h1V1h3V0zm3 2v4h4l1 1V2z"
          className="text-white"
        />
      </svg>
      <svg
        className={"hidden sm:mt-[2px] sm:ml-[2px] sm:block"}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 8 8"
      >
        <path
          fill="currentColor"
          d="M0 0v5l1-1h1V1h3V0zm3 2v4h4l1 1V2z"
          className="text-white"
        />
      </svg>
    </>
  );
};

export default ChatIcon;
