import { useMemo } from "react";
import { Project } from "../context/SupabaseContext.types";
import projectsData from "../data/projects.json";

export default function useProjects() {
  const projects = useMemo(() => {
    const currentDate = new Date();
    const halfMonthAgo = new Date();
    halfMonthAgo.setDate(currentDate.getDate() - 15);

    const projectsWithIsNew = (projectsData as Project[]).map((project) => {
      const releaseDateObj = new Date(project.release_date);
      return {
        ...project,
        isNew: releaseDateObj >= halfMonthAgo,
      };
    }); // Sort by closest to today's date (most recent from today first)
    const sorted = projectsWithIsNew.sort((a, b) => {
      const today = new Date();
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);

      // Calculate absolute difference from today
      const diffA = Math.abs(today.getTime() - dateA.getTime());
      const diffB = Math.abs(today.getTime() - dateB.getTime());

      return diffA - diffB; // Closest to today first
    });

    return sorted;
  }, []);

  return { projects, error: null };
}
