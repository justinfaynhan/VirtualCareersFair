import {IUserEntity} from 'interfaces/entities/IUser.entity';
import {IAnalytics, IGraduateStory} from 'interfaces/ICompany';

export interface ICompanyEntity extends IUserEntity {
  name: string;
  slogan: string;
  overview: string;
  graduate_stories: Array<IGraduateStory>;
  website_link: string;
  contact_email: string;
  video: string;
  banner_image: string;
  logo_image: string;
  taking_interns: boolean;
  taking_graduates: boolean;
  page_analytics: Array<IAnalytics>
}