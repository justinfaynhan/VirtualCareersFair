import mongoose, {Schema} from 'mongoose';
import {User} from 'db/user';

export const Admin = {
  ...User,
}

export const AdminSchema = new Schema(Admin);