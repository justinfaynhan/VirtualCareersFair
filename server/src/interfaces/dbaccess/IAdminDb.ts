import {IMakeDb} from 'interfaces/dbaccess';
import {IAdminData, IAdminEntity} from 'interfaces/entities/IAdmin.entity';

export interface IAdminDbAccess {
  findAll: () => Promise<Array<IAdminData>>;
  findById: ({_id}: {_id: string}) => Promise<IAdminData | null>;
  findByEmail: ({email}: {email: string}) => Promise<IAdminData | null>;
  insertOne: ({}: IAdminEntity) => Promise<IAdminData>;
}

export type IMakeAdminDb = (makeDb: IMakeDb) => IAdminDbAccess;