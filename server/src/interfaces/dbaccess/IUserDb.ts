import {IMakeDb} from 'interfaces/dbaccess';
import {IAuthorizationTypes} from 'interfaces/IAuthorization';
import {IAdminData} from 'interfaces/entities/IAdmin.entity';
import {ICompanyData} from 'interfaces/entities/ICompany.entity';
import {IStudentData} from 'interfaces/entities/IStudent.entity';

export interface IUserDbAccess {
  findAll: ({types}: {types: Array<IAuthorizationTypes>}) => Promise<IAdminData[] | IStudentData[] | ICompanyData[]>;
  findById: ({_id}: {_id: string}) => Promise<IAdminData | IStudentData | ICompanyData | null>;
  findByEmail: ({email}: {email: string}) => Promise<IAdminData | IStudentData | ICompanyData | null>;
}

export type IMakeUserDb = (makeDb: IMakeDb) => IUserDbAccess;