type Links = {
  headhunter: string;
  github: string;
  telegram: string;
};

export interface ITool {
  name: string;
  imgSrc: string;
  website: string;
}

export interface IDeveloper {
  name: string;
  role: string;
  links: Links;
}

export interface ICompany {
  name: string;
  website: string;
  description: string;
  developer: IDeveloper;
}

export interface IProject {
  company: ICompany;
  tools: ITool[];
}
