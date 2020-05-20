export type IGetStudentProfile = (id: string) => IStudentProfile;

export type IUpdateStudentProfile = (id: string, profile: any) => IStudentProfile;

export interface IStudentProfile {
  first_name: string;
  last_name: string;
  about: string;
  skills: any;
  uni: string;
  degree: string;
  resume_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}