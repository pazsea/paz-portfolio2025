"use client";

interface PlatformLabelsProps {
  platform: "APP" | "WEB" | "BOTH";
}

export default function PlatformLabels({ platform }: PlatformLabelsProps) {
  const platformColor = {
    APP: "bg-accent",
    WEB: "bg-secondary",
    BOTH: "bg-both-color",
  };

  return (
    <>
      {platform === "BOTH" ? (
        <>
          <span
            className={`inline-block px-2 py-1 text-sm text-white ${platformColor.APP}`}
          >
            APP
          </span>
          <span
            className={`inline-block px-2 py-1 text-sm text-white ${platformColor.WEB}`}
          >
            WEB
          </span>
        </>
      ) : (
        <span
          className={`inline-block px-2 py-1 text-sm ${platformColor[platform]}`}
        >
          {platform}
        </span>
      )}
    </>
  );
}
