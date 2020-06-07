import {IUserEntity, IUserEntityMakeArgs, IUserData} from 'interfaces/entities/IUser.entity';

export interface IAdminEntity extends IUserEntity {
}

export interface IAdminEntityMakeArgs extends IUserEntityMakeArgs {
}

export interface IAdminData extends IUserData {
}