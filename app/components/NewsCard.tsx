import FireIcon from "./icons/FireIcon"; // Import FireIcon component

interface NewsCardProps {
  title: string;
  description: string;
  isNew?: boolean;
}

export default function NewsCard({
  title,
  description,
  isNew = false,
}: NewsCardProps) {
  return (
    <div
      className={`relative bg-background p-2 rounded-lg overflow-hidden max-w-[192px] min-h-[102px] max-h-[102px] card`}
    >
      {isNew && (
        <div className="absolute top-2 right-2">
          <FireIcon />
        </div>
      )}
      <div className="flex flex-col content-between w-full h-full">
        <h4 className={`p-0 m-0 font-bold line-clamp-2 ${isNew ? "pr-2" : ""}`}>
          {title}
        </h4>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
