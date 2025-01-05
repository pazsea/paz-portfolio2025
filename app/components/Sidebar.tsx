"use client";

import { memo } from "react";
import ThemeToggleSwitch from "./ThemeToggleSwitch";
import NavLink from "./NavLink";
import Image from "next/image";
import avatar from "../../public/paz.jpeg";
import { useGlobal } from "../context/GlobalContext";

const Sidebar = () => {
  const { currentSection } = useGlobal();

  return (
    <nav
      className={
        "fixed top-0 z-50 flex h-auto w-full flex-col items-center justify-center bg-sidebar-pattern p-2 text-text shadow-lg border-b-1 border-gray-600 sm:left-0 sm:top-0 sm:h-full sm:w-40 sm:border-r-1 sm:border-b-0"
      }
    >
      <ul className="flex flex-row items-center p-1 space-x-4 border rounded-lg sm:space-y-4 sm:flex-col sm:space-x-0 bg-background border-primary sm:p-4">
        <li className="hidden sm:block">
          <Image
            src={avatar}
            alt="Avatar"
            className="rounded-full shadow-2xl"
            width={75}
            height={75}
          />
        </li>
        <li>
          <NavLink href="#about" id="about" currentSection={currentSection}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#projects"
            id="projects"
            currentSection={currentSection}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            href="#experience"
            id="experience"
            currentSection={currentSection}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <ThemeToggleSwitch />
        </li>
      </ul>
    </nav>
  );
};

export default memo(Sidebar);
