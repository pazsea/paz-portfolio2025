import { useEffect, useState } from "react";
import { useSupabase } from "../context/SupabaseContext";
import { Project } from "../context/SupabaseContext.types";

export default function useProjects() {
  const supabase = useSupabase();
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const cachedProjects = getCachedProjects();
      if (cachedProjects) {
        setProjects(cachedProjects);
      } else {
        await fetchAndCacheProjects();
      }
    };

    const getCachedProjects = () => {
      const cachedProjects = localStorage.getItem("projects");
      const cachedTimestamp = localStorage.getItem("projectsTimestamp");
      const oneDay = 24 * 60 * 60 * 1000;

      if (cachedProjects && cachedTimestamp) {
        const isCacheValid = Date.now() - parseInt(cachedTimestamp) < oneDay;
        if (isCacheValid) {
          return JSON.parse(cachedProjects);
        }
      }
      return null;
    };

    const fetchAndCacheProjects = async () => {
      let { data, error } = await supabase.from("projects").select("*");
      if (error) {
        setError(error);
      } else {
        const currentDate = new Date();
        const halfMonthAgo = new Date();
        halfMonthAgo.setDate(currentDate.getDate() - 15);

        const projectsWithIsNew = data?.map((project) => {
          const releaseDateObj = new Date(project.release_date);
          return {
            ...project,
            isNew: releaseDateObj <= halfMonthAgo,
          };
        });

        const sortedProjects = projectsWithIsNew?.sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );

        setProjects(sortedProjects || []);
        localStorage.setItem("projects", JSON.stringify(sortedProjects));
        localStorage.setItem("projectsTimestamp", Date.now().toString());
      }
    };

    fetchProjects();
  }, [supabase]);

  return { projects, error };
}
