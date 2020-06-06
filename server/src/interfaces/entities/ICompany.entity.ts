import {IUserEntity} from 'interfaces/entities/IUser.entity';
import {IAnalytics, IGraduateStory} from 'interfaces/ICompany';

export interface ICompanyEntity extends IUserEntity {
  name?: string | null;
  slogan?: string | null;
  overview?: string | null;
  graduate_stories?: Array<IGraduateStory>;
  website_link?: string | null;
  contact_email?: string | null;
  video?: string | null;
  banner_image?: string | null;
  logo_image?: string | null;
  taking_interns?: boolean | null;
  taking_graduates?: boolean | null;
  page_analytics?: IAnalytics;
}