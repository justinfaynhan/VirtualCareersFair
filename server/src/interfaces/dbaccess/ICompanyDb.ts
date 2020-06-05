import {IMakeDb} from 'interfaces/dbaccess';
import {ICompanyEntity} from 'interfaces/entities';

export interface ICompanyDbAccess {
  findAll: () => Promise<ICompanyEntity[]>;
  findById: ({_id}: {_id: string}) => Promise<ICompanyEntity | null>;
  findByEmail: ({email}: {email: string}) => Promise<ICompanyEntity | null>;
  updateOne: ({}: ICompanyEntity) => Promise<ICompanyEntity | null>;
  insertOne: ({}: ICompanyEntity) => Promise<ICompanyEntity>;
}

export type IMakeCompanyDb = (makeDb: IMakeDb) => ICompanyDbAccess;