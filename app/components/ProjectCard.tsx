import { useEffect, useState } from "react";
import PlatformLabels from "./PlatformLabels";
import Image from "next/image";
import ProjectInformation from "./ProjectInformation";
import FireIcon from "./icons/FireIcon";
import Label from "./Label"; // Import Label component

interface ProjectCardProps {
  name: string;
  releaseDate: string;
  platform: "APP" | "WEB" | "BOTH";
  description: string;
  imageUrl: string;
  isNew?: boolean;
}

export default function ProjectCard({
  name,
  releaseDate,
  platform,
  description,
  imageUrl,
  isNew = false,
}: ProjectCardProps) {
  const [truncatedDescription, setTruncatedDescription] = useState(description);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && window.innerWidth <= 1550) {
        setTruncatedDescription(truncateDescription(description, 50));
      } else {
        setTruncatedDescription(description);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [description]);

  const truncateDescription = (desc: string, maxLength: number) => {
    if (desc.length <= maxLength) return desc;
    return desc.substring(0, maxLength) + "...";
  };

  return (
    <div
      className={`relative p-4 rounded-lg ${
        isNew ? "border border-secondary" : "card"
      } group`}
    >
      {isNew && (
        <Label text="Recently released" className="flex items-center">
          <FireIcon className="mr-1" />
        </Label>
      )}
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={225}
        className="w-full h-auto max-w-md mx-auto"
      />
      <div className="absolute inset-0 flex flex-col justify-start p-4 text-white transition-opacity duration-300 bg-black bg-opacity-75 rounded-lg opacity-0 lg:group-hover:opacity-100">
        <ProjectInformation
          name={name}
          releaseDate={releaseDate}
          platform={platform}
          description={truncatedDescription}
        />
      </div>
    </div>
  );
}
