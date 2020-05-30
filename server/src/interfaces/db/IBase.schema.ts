import {Document} from 'mongoose';

export interface IBase extends Document {
  created_at: Date;
}