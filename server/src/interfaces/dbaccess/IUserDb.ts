import {IMakeDb} from 'interfaces/dbaccess';
import {IAuthorizationTypes} from 'interfaces/IAuthorization';
import {IAdminEntity, ICompanyEntity, IStudentEntity} from 'interfaces/entities';
export interface IUserDbAccess {
  findAll: ({types}: {types: Array<IAuthorizationTypes>}) => Promise<IAdminEntity[] | IStudentEntity[] | ICompanyEntity[]>;
  findById: ({_id}: {_id: string}) => Promise<IAdminEntity | IStudentEntity | ICompanyEntity | null>;
  findByEmail: ({email}: {email: string}) => Promise<IAdminEntity | IStudentEntity | ICompanyEntity | null>;
}

export type IMakeUserDb = (makeDb: IMakeDb) => IUserDbAccess;