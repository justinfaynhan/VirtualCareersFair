import {IMakeDb} from 'interfaces/dbaccess';
import {IAdminEntity} from 'interfaces/entities';

export interface IAdminDbAccess {
  findAll: () => Promise<Array<{}>>;
  findById: ({_id}: {_id: string}) => Promise<IAdminEntity | null>;
  findByEmail: ({email}: {email: string}) => Promise<IAdminEntity | null>;
  insertOne: ({}: IAdminEntity) => Promise<IAdminEntity>;
}

export type IMakeAdminDb = (makeDb: IMakeDb) => IAdminDbAccess;