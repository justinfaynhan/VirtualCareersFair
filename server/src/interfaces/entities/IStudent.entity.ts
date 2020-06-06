import {IUserEntity} from 'interfaces/entities/IUser.entity';

export interface IStudentEntity extends IUserEntity {
  first_name?: string | null;
  last_name?: string | null;
  about?: string | null;
  skills?: Array<string>;
  uni?: string | null;
  degree?: string | null;
  resume_link?: string | null;
  linkedin_link?: string | null;
  github_link?: string | null;
  portfolio_link?: string | null;
}