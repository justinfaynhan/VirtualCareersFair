import mongoose, {Schema} from 'mongoose';
import {User} from 'db/base.schema';

export const Admin = {
  ...User,
}

export const AdminSchema = new Schema(Admin);