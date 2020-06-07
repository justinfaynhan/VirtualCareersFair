export type IGetStudentProfile = (id: string) => Promise<IStudentProfile>;

export type IUpdateStudentProfile = ({id, ...profile}: IUpdateStudentProfileArgs) => Promise<IStudentProfile>;


export interface IUpdateStudentProfileArgs {
  id: string;
  first_name?: string;
  last_name?: string;
  about?: string;
  skills?: string[];
  uni?: string;
  degree?: string;
  resume_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}

export interface IStudentProfile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  about: string | null;
  skills: string[];
  uni: string | null;
  degree: string | null;
  resume_link: string | null;
  linkedin_link: string | null;
  github_link: string | null;
  portfolio_link: string | null;
}