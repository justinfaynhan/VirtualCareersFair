import mongoose, {Schema} from 'mongoose';
import {IBase, Base} from 'db/base';

export interface IInvite extends IBase {
  invite_code: string;
  privilege: string;
  expiry: Date;
}

export const Invite = {
  invite_code: {type: String, required: true},
  privilege: {type: String, required: true},
  expiry: {type: Date, required: true},
}

export const InviteSchema = new Schema(Invite);

export default mongoose.model<IInvite>('Invite', InviteSchema);