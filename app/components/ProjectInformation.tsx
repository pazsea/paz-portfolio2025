import PlatformLabels from "./PlatformLabels";

interface ProjectInformationProps {
  name: string;
  releaseDate: string;
  platform: "APP" | "WEB" | "BOTH";
  description: string;
}

export default function ProjectInformation({
  name,
  releaseDate,
  platform,
  description,
}: ProjectInformationProps) {
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2">Release Date: {formattedDate}</p>
      <div className="flex space-x-2 mt-2">
        <PlatformLabels platform={platform} />
      </div>
      <p className="mt-2">{description}</p>
    </div>
  );
}
