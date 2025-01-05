import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  companyLogo: string | StaticImport;
  jobTitle: string;
  companyName: string;
  employmentPeriod: string;
  location: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyLogo,
  jobTitle,
  companyName,
  employmentPeriod,
  location,
  responsibilities,
}) => {
  return (
    <div
      className={`p-6 transition duration-300 border border-primary rounded-lg shadow-md bg-background text-text hover:shadow-xl flex flex-col w-full `}
    >
      <div className={`flex items-center space-x-4`}>
        <Image
          src={companyLogo}
          alt={`${companyName} Logo`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold">{jobTitle}</h3>
          <p className="text-accent">{companyName}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-text">
        {employmentPeriod} · {location}
      </p>
      {responsibilities.map((responsibility, index) => (
        <p className="text-[15px] text-text mt-2" key={index}>
          {responsibility}
        </p>
      ))}
    </div>
  );
};

export default ExperienceCard;
