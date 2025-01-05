"use client";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // Import Experience component
import Sidebar from "./components/Sidebar";
import { SupabaseProvider } from "./context/SupabaseContext";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Home() {
  return (
    <SupabaseProvider>
      <div className="flex flex-col min-h-screen sm:flex-row">
        <Sidebar />
        <main className={"flex-1 ml-0 overflow-y-auto text-text sm:ml-40"}>
          <section
            id="about"
            className="flex flex-col justify-center min-h-screen bg-spot-patterns "
          >
            <About />
          </section>
          <section
            id="projects"
            className="flex flex-col justify-center min-h-screen pt-[65px] px-4 md:px-2"
          >
            <Projects />
          </section>
          <section
            id="experience"
            className="flex flex-col justify-center min-h-screen bg-spot-patterns-right pt-[65px] sm:pt-0 px-4 md:px-8"
          >
            <Experience />
          </section>
        </main>
        <FloatingActionButton />
      </div>
    </SupabaseProvider>
  );
}
