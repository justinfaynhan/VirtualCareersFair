import {IBaseEntity, IBaseEntityMakeArgs, IBaseData} from 'interfaces/entities/IBase.entity'
import {IAuthorizationTypes} from 'interfaces/IAuthorization';

export interface IInviteEntity extends IBaseEntity {
  invite_code: string;
  privilege: string | null;
  expiry: string | null;
}

export interface IInviteEntityMakeArgs extends IBaseEntityMakeArgs {
  privilege?: string;
  expiry?: string;
}

export interface IInviteData extends IBaseData {
  invite_code: string;
  privilege: string | null;
  expiry: string | null;
}