import {IBaseEntity, IBaseEntityMakeArgs} from 'interfaces/entities/IBase.entity'
import {IAuthorizationTypes} from 'interfaces/IAuthorization';

export interface IInviteEntity extends IBaseEntity {
  invite_code: string;
  privilege: string | null;
  expiry: Date | string | null;
}

export interface IInviteEntityMakeArgs extends IBaseEntityMakeArgs {
  privilege?: string;
  expiry?: Date | string;
}