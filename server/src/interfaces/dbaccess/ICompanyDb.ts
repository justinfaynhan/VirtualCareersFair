import {IMakeDb} from 'interfaces/dbaccess';
import {ICompanyEntity} from 'interfaces/entities';

export interface ICompanyDbAccess {
  findAll: () => Promise<Array<any>>;
  findById: ({_id}: {_id: string}) => Promise<{[key: string]: any} | null>;
  findByEmail: ({email}: {email: string}) => Promise<{[key: string]: any} | null>;
  updateOne: ({}: ICompanyEntity | {[key: string]: any}) => Promise<{[key: string]: any} | null>;
  insertOne: ({}: ICompanyEntity | {[key: string]: any}) => Promise<{[key: string]: any}>;
}

export type IMakeCompanyDb = (makeDb: IMakeDb) => ICompanyDbAccess;