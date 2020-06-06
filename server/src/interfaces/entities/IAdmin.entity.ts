import {IUserEntity, IUserEntityMakeArgs} from 'interfaces/entities/IUser.entity';

export interface IAdminEntity extends IUserEntity {
}

export interface IAdminEntityMakeArgs extends IUserEntityMakeArgs {
}