import {IMakeDb} from 'interfaces/dbaccess';
import {IAdminEntity} from 'interfaces/entities';

export interface IAdminDbAccess {
  findAll: () => any;
  findById: ({id}) => any;
  findByEmail: ({email}) => any;
  insert: ({}: IAdminEntity | any) => any;
}

export type IMakeAdminDb = (makeDb: IMakeDb) => IAdminDbAccess;