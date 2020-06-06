import {IUserEntity, IUserEntityMakeArgs} from 'interfaces/entities/IUser.entity';

export interface IStudentEntity extends IUserEntity {
  first_name: string | null;
  last_name: string | null;
  about: string | null;
  skills: Array<string> | null;
  uni: string | null;
  degree: string | null;
  resume_link: string | null;
  linkedin_link: string | null;
  github_link: string | null;
  portfolio_link: string | null;
}

export interface IStudentEntityMakeArgs extends IUserEntityMakeArgs {
  first_name?: string;
  last_name?: string;
  about?: string;
  skills?: Array<string>;
  uni?: string;
  degree?: string;
  resume_link?: string;
  linkedin_link?: string;
  github_link?: string;
  portfolio_link?: string;
}