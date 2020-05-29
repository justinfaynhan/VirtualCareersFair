import {Document} from 'mongoose';

export interface IBase extends Document {
  created_at: Date;
}

export const Base = {
  created_at: {type: Date, required: true}
}

export interface IUser extends IBase {
  email: string;
  password: string;
}

export const User = {
  email: {type: String, required: true},
  password: {type: String, required: true},
}