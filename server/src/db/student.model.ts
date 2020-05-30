import mongoose, {Schema} from 'mongoose';
import {IUser, User} from 'db/base';

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

export const Student = {
  ...User,
  first_name: {type: String},
  last_name: {type: String},
  about: {type: String},
  skills: {type: String},
  uni: {type: String},
  degree: {type: String},
  resume_link: {type: String},
  linkedin_link: {type: String},
  github_link: {type: String},
  portfolio_link: {type: String}
};

export const StudentSchema = new Schema(Student);