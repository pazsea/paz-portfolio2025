import Image from "next/image";
import NewsCarousel from "./NewsCarousel";
import cartoonProgramming from "../../public/cartoon_programming.svg";
import { useGlobal } from "../context/GlobalContext";

export default function About() {
  const { isMobile, isTablet } = useGlobal();
  let imageWidth = 192;
  if (isMobile) {
    imageWidth = 140;
  }
  if (isTablet) {
    imageWidth = 160;
  }
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-7 md:gap-5 h-[100vh] sm:h-[70vh] pb-5 px-5 md:px-10"
    >
      <div className="flex flex-col items-center p-2 transition duration-300 border rounded-lg shadow-md sm:p-6 bg-background text-text hover:shadow-xl border-primary ">
        <h2 className="text-2xl font-bold text-center lg:text-2xl">
          Patrick Sjöberg Portfolio
        </h2>
        <p className="max-w-2xl text-[0.9rem] text-center md:text-[1rem] lg:text-lg">
          I am a software developer with 5 years of experience and expertise in
          React, React Native, Java, and C#. Currently, I work at Nordnet on the
          social network Shareville. Here, I’ll showcase my projects and
          professional experience.
        </p>
      </div>
      <Image
        src={cartoonProgramming}
        alt="Cartoon Programming"
        width={imageWidth}
      />
      {isMobile ? (
        <NewsCarousel />
      ) : (
        <div className="text-center ">
          <p className="pb-2 font-bold">My news:</p>
          <NewsCarousel />
        </div>
      )}
    </div>
  );
}
