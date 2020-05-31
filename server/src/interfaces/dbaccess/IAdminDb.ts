import {IMakeDb} from 'interfaces/dbaccess';
import {IAdminEntity} from 'interfaces/entities';

export interface IAdminDbAccess {
  findAll: () => Promise<Array<{}>>;
  findById: ({_id}: {_id: string}) => Promise<{[key: string]: any} | null>;
  findByEmail: ({email}: {email: string}) => Promise<{[key: string]: any} | null>;
  insertOne: ({}: IAdminEntity | {[key: string]: any}) => Promise<{[key: string]: any}>;
}

export type IMakeAdminDb = (makeDb: IMakeDb) => IAdminDbAccess;