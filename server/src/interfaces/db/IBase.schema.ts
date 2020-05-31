import {Document} from 'mongoose';

export interface IBase extends Document {
  _id: string;
  created_at: Date;
  updated_at: Date;
}