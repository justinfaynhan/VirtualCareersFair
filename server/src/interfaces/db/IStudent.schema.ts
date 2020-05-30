import {IUser} from 'interfaces/db/IUser.schema';

export interface IStudent extends IUser {
  first_name: string;
  last_name: string;
  about: string;
  skills: string;
  uni: string;
  degree: string;
  resume_link: string;
  linkedin_link: string;
  github_link: string;
  portfolio_link: string;
};