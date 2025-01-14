export type Link = {
  text: string;
  url: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  release_date: string;
  image_url: string;
  platform: "APP" | "WEB" | "BOTH";
  links: Link[];
  isNew?: boolean;
};

export type News = {
  id: number;
  title: string;
  date: string;
  description: string;
  image_url: string;
  links: Link[];
  isNew?: boolean;
};

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: Project;
      };
      news: {
        Row: News;
      };
    };
  };
};
