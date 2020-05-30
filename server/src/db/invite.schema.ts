import mongoose, {Schema} from 'mongoose';

export const Invite = {
  invite_code: {type: String, required: true, index: true, dropDups: true},
  privilege: {type: String, required: true},
  expiry: {type: Date, required: true},
}

export const InviteSchema = new Schema(Invite);