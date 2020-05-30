import mongoose, {Schema} from 'mongoose';
import {IUser, User} from 'db/base';
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

export const Company = {
  ...User,
  name: {type: String},
  slogan: {type: String},
  overview: {type: String},
  graduate_stories: {type: String},
  website_link: {type: String},
  contact_email: {type: String},
  video: {type: String},
  banner_image: {type: String},
  logo_image: {type: String},
  taking_interns: {type: Boolean},
  taking_graduates: {type: Boolean},
  page_analytics: {type: Array}
};

export const CompanySchema = new Schema(Company);