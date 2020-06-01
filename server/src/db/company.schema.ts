import mongoose, {Schema} from 'mongoose';
import {User} from 'db/user';

export const Company = {
  ...User,
  name: {type: String, index: true},
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