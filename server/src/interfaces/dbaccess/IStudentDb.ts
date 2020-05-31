import {IMakeDb} from 'interfaces/dbaccess';
import {IStudentEntity} from 'interfaces/entities';

export interface IStudentDbAccess {
  findAll: () => Promise<Array<{[key: string]: any}>>;
  findById: ({_id}: {_id: string}) => Promise<{[key: string]: any} | null>;
  findByEmail: ({email}: {email: string}) => Promise<{[key: string]: any} | null>;
  updateOne: ({}: IStudentEntity | {[key: string]: any}) => Promise<{[key: string]: any} | null>;
  insertOne: ({}: IStudentEntity | {[key: string]: any}) => Promise<{[key: string]: any}>;
}

export type IMakeStudentDb = (makeDb: IMakeDb) => IStudentDbAccess;