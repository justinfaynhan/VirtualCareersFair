export type IGetStudentProfile = (id: string) => Promise<IStudentProfile>;

export type IUpdateStudentProfile = (id: string, profile: any) => Promise<IStudentProfile>;

export interface IStudentProfile {
  id: string;
  first_name: string;
  last_name: string;
  about: string;
  skills: Array<string>;
  uni: string;
  degree: string;
  resume_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}