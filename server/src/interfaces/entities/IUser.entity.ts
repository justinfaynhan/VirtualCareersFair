import {IBaseEntity} from 'interfaces/entities/IBase.entity'

export interface IUserEntity extends IBaseEntity {
  email: string;
  password: string;
}