import {IBase} from 'interfaces/db/IBase.schema';

export interface IInvite extends IBase {
  invite_code: string;
  privilege: string;
  expiry: Date;
}