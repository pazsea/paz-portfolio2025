import { useMemo } from "react";
import { News } from "../context/SupabaseContext.types";
import newsData from "../data/news.json";

export default function useNews() {
  const news = useMemo(() => {
    const currentDate = new Date();
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(currentDate.getDate() - 3);

    return (newsData as News[])
      .map((newsItem) => ({
        ...newsItem,
        isNew: new Date(newsItem.date) >= threeDaysAgo,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, []);

  return { news, error: null };
}
