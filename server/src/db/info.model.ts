import mongoose, {Schema} from 'mongoose';
import {IBase, Base} from 'db/base';

export interface IInfo extends IBase {
  about_us: string;
  student_instructions: string;
  company_instructions: string;
  admin_instructions: string;
}

export const Info = {
  about_us: {type: String},
  student_instructions: {type: String},
  company_instructions: {type: String},
  admin_instructions: {type: String}
}

export const InfoSchema = new Schema(Info);