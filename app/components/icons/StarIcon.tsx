import React from "react";

const StarIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 8 8"
    fill="currentColor"
    className={className}
  >
    <path d="M4 0L3 3H0l2.5 2l-1 3L4 6l2.5 2l-1-3L8 3H5z" />
  </svg>
);

export default StarIcon;
