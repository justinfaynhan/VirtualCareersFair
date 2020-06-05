import {IMakeDb} from 'interfaces/dbaccess';
import {IStudentEntity} from 'interfaces/entities';

export interface IStudentDbAccess {
  findAll: () => Promise<Array<IStudentEntity>>;
  findById: ({_id}: {_id: string}) => Promise<IStudentEntity | null>;
  findByEmail: ({email}: {email: string}) => Promise<IStudentEntity | null>;
  updateOne: ({}: IStudentEntity) => Promise<IStudentEntity | null>;
  insertOne: ({}: IStudentEntity) => Promise<IStudentEntity>;
}

export type IMakeStudentDb = (makeDb: IMakeDb) => IStudentDbAccess;