import mongoose, {Schema} from 'mongoose';
import {IUser, User} from 'db/base';

export interface IAdmin extends IUser {
}

export const Admin = {
  ...User,
}

export const AdminSchema = new Schema(Admin);