import mongoose, {Schema} from 'mongoose';
import {Base} from 'db/base';

export const Info = {
  ...Base,
  about_us: {type: String},
  student_instructions: {type: String},
  company_instructions: {type: String},
  admin_instructions: {type: String}
}

export const InfoSchema = new Schema(Info);