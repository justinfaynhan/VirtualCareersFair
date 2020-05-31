import {IMakeDb} from 'interfaces/dbaccess';

export interface IUserDbAccess {
  findAll: () => any;
  findById: ({id}) => any;
  findByEmail: ({email}) => any;
}

export type IMakeUserDb = (makeDb: IMakeDb) => IUserDbAccess;