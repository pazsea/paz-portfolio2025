import { useEffect, useState } from "react";
import { useSupabase } from "../context/SupabaseContext";
import { News } from "../context/SupabaseContext.types";

export default function useNews() {
  const supabase = useSupabase();
  const [news, setNews] = useState<News[] | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const cachedNews = getCachedNews();
      if (cachedNews) {
        setNews(cachedNews);
      } else {
        await fetchAndCacheNews();
      }
    };

    const getCachedNews = () => {
      const cachedNews = localStorage.getItem("news");
      const cachedTimestamp = localStorage.getItem("newsTimestamp");
      const oneDay = 24 * 60 * 60 * 1000;

      if (cachedNews && cachedTimestamp) {
        const isCacheValid = Date.now() - parseInt(cachedTimestamp) < oneDay;
        if (isCacheValid) {
          return JSON.parse(cachedNews);
        }
      }
      return null;
    };

    const fetchAndCacheNews = async () => {
      let { data, error } = await supabase.from("news").select("*");
      if (error) {
        setError(error);
      } else {
        const currentDate = new Date();
        const halfMonthAgo = new Date();
        halfMonthAgo.setDate(currentDate.getDate() - 15);

        const newsWithIsNew = data
          ?.map((newsItem) => ({
            ...newsItem,
            isNew: new Date(newsItem.date) <= halfMonthAgo,
          }))
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ); // Sort by date

        setNews(newsWithIsNew || []);
        localStorage.setItem("news", JSON.stringify(newsWithIsNew));
        localStorage.setItem("newsTimestamp", Date.now().toString());
      }
    };

    fetchNews();
  }, [supabase]);

  return { news, error };
}
