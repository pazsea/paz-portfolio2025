"use client";

import React from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  id: string;
  currentSection: string;
}

const NavLink = ({ href, children, id, currentSection }: NavLinkProps) => {
  const isActive = currentSection === id;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.location.hash = href;
    }
  };

  return (
    <a
      href={href}
      onClick={(e) => handleLinkClick(e, id)}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
