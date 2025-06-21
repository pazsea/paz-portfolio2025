import { useMemo } from "react";
import projectsData from "../data/projects.json";
import { Project } from "../context/SupabaseContext.types";

export default function useProjects() {
  const projects = useMemo(() => {
    const now = new Date();
    const fifteenDaysAgo = new Date(now);
    fifteenDaysAgo.setDate(now.getDate() - 15);

    return (
      (projectsData as Project[])
        .map((project) => ({
          ...project,
          releaseDate: new Date(project.release_date),
          isNew: new Date(project.release_date) >= fifteenDaysAgo,
        }))
        .filter((project) => !isNaN(project.releaseDate.getTime()))
        // Sort by closest to today's date (smallest absolute difference first)
        .sort((a, b) => {
          const diffA = Math.abs(now.getTime() - a.releaseDate.getTime());
          const diffB = Math.abs(now.getTime() - b.releaseDate.getTime());
          return diffA - diffB;
        })
    );
  }, []);

  return { projects, error: null };
}
