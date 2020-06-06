import {IMakeDb} from 'interfaces/dbaccess';
import {IAuthorizationTypes} from 'interfaces/IAuthorization';

export interface IUserDbAccess {
  findAll: ({types}: {types: Array<IAuthorizationTypes>}) => Promise<Array<{[key: string]: any}>>;
  findById: ({_id}: {_id: string}) => Promise<{[key: string]: any} | null>;
  findByEmail: ({email}: {email: string}) => Promise<{[key: string]: any} | null>;
}

export type IMakeUserDb = (makeDb: IMakeDb) => IUserDbAccess;