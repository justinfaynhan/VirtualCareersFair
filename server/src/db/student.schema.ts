import mongoose, {Schema} from 'mongoose';
import {User} from 'db/user';

export const Student = {
  ...User,
  first_name: {type: String},
  last_name: {type: String},
  about: {type: String},
  skills: {type: Array},
  uni: {type: String},
  degree: {type: String},
  resume_link: {type: String},
  linkedin_link: {type: String},
  github_link: {type: String},
  portfolio_link: {type: String}
};

export const StudentSchema = new Schema(Student).index({first_name: 1, last_name: 1});