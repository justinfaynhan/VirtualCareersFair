import {IMakeDb} from 'interfaces/dbaccess';
import {ICompanyEntity, ICompanyData} from 'interfaces/entities/ICompany.entity';

export interface ICompanyDbAccess {
  findAll: () => Promise<ICompanyData[]>;
  findById: ({_id}: {_id: string}) => Promise<ICompanyData | null>;
  findByEmail: ({email}: {email: string}) => Promise<ICompanyData | null>;
  updateOne: ({}: ICompanyEntity) => Promise<ICompanyData | null>;
  insertOne: ({}: ICompanyEntity) => Promise<ICompanyData>;
}

export type IMakeCompanyDb = (makeDb: IMakeDb) => ICompanyDbAccess;