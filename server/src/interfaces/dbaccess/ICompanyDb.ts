import {IMakeDb} from 'interfaces/dbaccess';
import {ICompanyEntity} from 'interfaces/entities';

export interface ICompanyDbAccess {
  findAll: () => any;
  findById: ({id}) => any;
  findByEmail: ({email}) => any;
  updateOne: ({}: ICompanyEntity | any) => any;
  insert: ({}: ICompanyEntity | any) => any;
}

export type IMakeCompanyDb = (makeDb: IMakeDb) => ICompanyDbAccess;