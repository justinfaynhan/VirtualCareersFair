import {IBaseEntity, IBaseEntityMakeArgs} from 'interfaces/entities/IBase.entity'

export interface IUserEntity extends IBaseEntity {
  email: string | null;
  password: string | null;
}

export interface IUserEntityMakeArgs extends IBaseEntityMakeArgs {
  email?: string;
  password?: string;
}