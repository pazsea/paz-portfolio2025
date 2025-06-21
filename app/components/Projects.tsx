"use client";
import { useEffect, useState, useMemo } from "react";
import { Project } from "../context/SupabaseContext.types";
import ProjectCard from "./ProjectCard";
import useProjects from "../hooks/useProjects";
import Modal from "./Modal";
import ProjectInformation from "./ProjectInformation";
import ViewMoreButton from "./ViewMoreButton";
import { useGlobal } from "../context/GlobalContext";

export default function Projects() {
  const { projects } = useProjects();
  const { isMobile, isTablet } = useGlobal();
  const [showMore, setShowMore] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const isInternalLink = (url: string) => url.startsWith("#");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projectList = useMemo(() => {
    if (!projects) return null;
    const visibleProjects = showMore
      ? projects
      : projects.slice(0, isMobile || isTablet ? 3 : 6);
    return visibleProjects.map((project) => (
      <div
        key={project.id}
        className="cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <ProjectCard
          name={project.name}
          releaseDate={project.release_date}
          platform={project.platform}
          description={project.description}
          imageUrl={project.image_url}
          isNew={project.isNew}
        />
      </div>
    ));
  }, [projects, showMore, isMobile]);

  if (!isClient) {
    return null;
  }

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-background text-text"
    >
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {projectList}
      </div>
      {projects && projects.length > 6 && !showMore && (
        <ViewMoreButton onClick={() => setShowMore(true)} />
      )}
      {selectedProject && (
        <Modal
          title={selectedProject.name}
          onClose={() => setSelectedProject(null)}
        >
          <div className="relative sm:p-4 bg-background text-text">
            <div className="w-full sm:w-[414px] sm:h-[232px]">
              {!isImageLoaded && (
                <div className="w-full h-full bg-gray-200 animate-pulse"></div>
              )}
              <img
                src={selectedProject.image_url}
                alt={selectedProject.name}
                className={`object-cover w-full h-full ${
                  isImageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>
            <div className="mt-4">
              <ProjectInformation
                name={selectedProject.name}
                releaseDate={selectedProject.release_date}
                platform={selectedProject.platform}
                description={selectedProject.description}
              />
              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="flex flex-wrap mt-4">
                  {selectedProject.links.map((link) =>
                    isInternalLink(link.url) ? (
                      <button
                        key={link.url}
                        onClick={() => {
                          document
                            .querySelector(link.url)
                            ?.scrollIntoView({ behavior: "smooth" });
                          setSelectedProject(null);
                        }}
                        className="m-1 px-3 py-1 text-md link rounded-full flex items-baseline gap-2"
                      >
                        {link.text}
                      </button>
                    ) : (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        className="m-1 px-3 py-1 text-md link rounded-full flex items-baseline gap-2"
                      >
                        {link.text}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
