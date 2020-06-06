import {IUser} from 'interfaces/db/IUser.schema';
import {IAnalytics} from 'interfaces/ICompany';

export interface ICompany extends IUser {
  name: string;
  slogan: string;
  overview: string;
  graduate_stories: string;
  website_link: string;
  contact_email: string;
  video: string;
  banner_image: string;
  logo_image: string;
  taking_interns: boolean;
  taking_graduates: boolean;
  page_analytics: Array<IAnalytics>
};