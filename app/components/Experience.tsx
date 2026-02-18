import React from "react";
import ExperienceCard from "./ExperienceCard";
import atglogo from "../../public/atglogo.png";
import nordnetlogo from "../../public/nordnetlogo.png";
import caspecologo from "../../public/caspecologo.png";

const Experience: React.FC = () => {
  const experiences = [
    {
      companyLogo: atglogo,
      jobTitle: "App Developer (React Native)",
      companyName: "ATG",
      employmentPeriod: "Jan 2025 – Present",
      location: "Stockholm, Sweden",
      responsibilities: [
        "Developing and maintaining the ATG mobile application using React Native.",
        "Managing release processes, builds, and distribution to the App Store and Google Play.",
        "Collaborating with cross-functional teams to deliver a seamless user experience.",
      ],
    },
    {
      companyLogo: nordnetlogo,
      jobTitle: "Software Engineer",
      companyName: "Nordnet Bank AB",
      employmentPeriod: "Jan 2023 – Dec 2024",
      location: "Stockholm, Sweden",
      responsibilities: [
        "Developing features for the Shareville platform on both web and app, working across backend and frontend.",
        "Regularly conducting demos and presentations on new features and improvements.",
        "Conducted technical interviews for prospective candidates.",
      ],
    },
    {
      companyLogo: caspecologo,
      jobTitle: "Software Engineer",
      companyName: "Caspeco",
      employmentPeriod: "Nov 2019 – Jan 2023",
      location: "Uppsala, Sweden",
      responsibilities: [
        "Led the design and development of Caspeco's component library.",
        "Part of the team Core that was responsible for the release processes.",
        "Mentored junior interns and team members by organizing and delivering internal workshops.",
      ],
    },
  ];

  return (
    <div className="flex flex-col h-full gap-6 lg:max-w-[50%] self-center">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          companyLogo={exp.companyLogo}
          jobTitle={exp.jobTitle}
          companyName={exp.companyName}
          employmentPeriod={exp.employmentPeriod}
          location={exp.location}
          responsibilities={exp.responsibilities}
        />
      ))}
    </div>
  );
};

export default Experience;
