import {IBaseEntity, IBaseEntityMakeArgs, IBaseData} from 'interfaces/entities/IBase.entity'

export interface IUserEntity extends IBaseEntity {
  email: string | null;
  password: string | null;
}

export interface IUserEntityMakeArgs extends IBaseEntityMakeArgs {
  email?: string;
  password?: string;
}

export interface IUserData extends IBaseData {
  email: string;
  password: string;
}