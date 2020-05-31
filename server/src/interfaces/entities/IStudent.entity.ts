import {IUserEntity} from 'interfaces/entities/IUser.entity';

export interface IStudentEntity extends IUserEntity {
  first_name: string;
  last_name: string;
  about: string;
  skills: Array<string>;
  uni: string;
  degree: string;
  resume_link: string;
  linkedin_link: string;
  github_link: string;
  portfolio_link: string;
}