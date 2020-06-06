import {IBase} from 'interfaces/db/IBase.schema';

export interface IUser extends IBase {
  email: string;
  password: string;
}