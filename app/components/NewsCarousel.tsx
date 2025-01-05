"use client";
import { useState, useMemo } from "react";
import useNews from "../hooks/useNews";
import NewsCard from "./NewsCard";
import ChevronIconLeft from "./ChevronIconLeft"; // Updated import
import ChevronIconRight from "./ChevronIconRight"; // Updated import
import Modal from "./Modal";
import { News } from "../context/SupabaseContext.types";
import { useGlobal } from "../context/GlobalContext"; // Import useGlobal

export default function NewsCarousel() {
  const { news } = useNews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const { isDesktop } = useGlobal();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNext = () => {
    if (news) {
      const maxIndex = isDesktop ? news.length - 3 : news.length - 1;
      setCurrentIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : prevIndex
      );
    }
  };

  const newsList = useMemo(() => {
    if (!news) return null;
    const visibleNews = isDesktop
      ? news.slice(currentIndex, currentIndex + 3)
      : news.slice(currentIndex, currentIndex + 1);
    return visibleNews.map((newsItem, index) => (
      <div
        key={newsItem.id}
        className="cursor-pointer"
        onClick={() => setSelectedNews(newsItem)}
      >
        <NewsCard
          title={newsItem.title}
          description={newsItem.description}
          isNew={newsItem.isNew}
        />
      </div>
    ));
  }, [news, currentIndex, isDesktop]);

  return (
    <div className="flex items-center justify-center w-full">
      <button aria-label="Previous" onClick={handlePrev} className="p-2">
        <ChevronIconLeft />
      </button>
      <div className={"grid gap-2 sm:grid-cols-1 lg:grid-cols-3"}>
        {newsList}
      </div>
      <button aria-label="Next" onClick={handleNext} className="p-2">
        <ChevronIconRight />
      </button>
      {selectedNews && (
        <Modal title={selectedNews.title} onClose={() => setSelectedNews(null)}>
          <div className="relative sm:p-4 bg-background text-text">
            {selectedNews.image_url && (
              <div className="w-[414px] h-[232px]">
                {!isImageLoaded && (
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                )}
                <img
                  src={selectedNews.image_url}
                  alt={selectedNews.title}
                  className={`object-cover w-full h-full ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
            )}
            <div
              className={`${selectedNews.image_url ? "pt-2" : ""} text-left`}
            >
              <p>{selectedNews.description}</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
