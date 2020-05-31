import {IBaseEntity} from 'interfaces/entities/IBase.entity'
import {IAuthorizationTypes} from 'interfaces/IAuthorization';

export interface IInviteEntity extends IBaseEntity {
  invite_code: string;
  privilege: string;
  expiry: Date;
}