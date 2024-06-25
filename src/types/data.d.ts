type TOwner = {
  name: string;
};

type TInitProjectData = {
  name: string;
  image: string;
};

type TInitData = {
  owner: TOwner;
  projects: TInitProjectData[];
};

type TProjectData = {
  id: number;
  name: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  image: string;
  created_at: string;
};

type TData = {
  owner: TOwner;
  projects: TProjectData[];
};
